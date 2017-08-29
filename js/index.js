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
exports.default = function (_a) {
    var log = _a.log, write = _a.write, _b = _a.propagateToOriginal, propagateToOriginal = _b === void 0 ? true : _b;
    var originalFactory = log.methodFactory;
    log.methodFactory = function (methodName, level, loggerName) {
        var originalMethod = originalFactory(methodName, level, loggerName);
        return function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            write(loggerName, methodName, objects);
            if (propagateToOriginal) {
                originalMethod.apply(undefined, objects);
            }
        };
    };
};
