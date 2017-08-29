"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// Default formatter for formatting log message
exports.default = (loggerName, methodName, objects) => {
    const withDate = [
        new Date().toISOString(),
        loggerName,
        `[${methodName.toUpperCase()}]`,
        ...objects
    ];
    return withDate.map(object => object.toString()).join(' ');
};
