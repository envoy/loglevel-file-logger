"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// Default formatter for formatting log message
exports.default = (loggerName, methodName, objects, now) => {
    const withDate = [
        now ? now().toISOString() : new Date().toISOString(),
        loggerName,
        `[${methodName.toUpperCase()}]`,
        ...objects
    ];
    return withDate
        .map(object => {
        if (object === undefined) {
            return '[object Undefined]';
        }
        else if (object === null) {
            return '[object Null]';
        }
        else if (Object.prototype.toString.call(object) === '[object Object]' ||
            Array.isArray(object)) {
            return JSON.stringify(object);
        }
        return object.toString();
    })
        .join(' ');
};
