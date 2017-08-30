/// <reference types="loglevel" />
export { default as FetchBlobWriter } from './FetchBlobWriter';
export { default as Formatter } from './Formatter';
export { default as defaultFormatter } from './defaultFormatter';
declare const _default: ({log, write, propagateToOriginal}: {
    log: Log;
    write: (loggerName: string, methodName: string, messages: any[]) => void;
    propagateToOriginal?: boolean | undefined;
}) => void;
export default _default;
