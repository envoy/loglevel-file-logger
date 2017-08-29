/**
 * Formatter is a function for formatting log
 */
export default interface Formatter {
    (loggerName: string, methodName: string, messages: Array<any>): string;
}
