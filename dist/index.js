"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Setup logger with given writer and formatter
 *
 * @param log global root logger object from loglevel
 * @param write write function we write log to
 * @param propagateToOriginal should we propgate the log message to the original
 *        logging method
 */
exports.default = ({ log, write, propagateToOriginal = true }) => {
    const originalFactory = log.methodFactory;
    log.methodFactory = (methodName, level, loggerName) => {
        const originalMethod = originalFactory(methodName, level, loggerName);
        return (...objects) => {
            write(loggerName, methodName, objects);
            if (propagateToOriginal) {
                originalMethod.apply(undefined, objects);
            }
        };
    };
};
