/// <reference types="loglevel" />
declare const _default: ({log, write, propagateToOriginal}: {
    log: Log;
    write: (loggerName: string, methodName: string, messages: any[]) => void;
    propagateToOriginal: boolean;
}) => void;
export default _default;
