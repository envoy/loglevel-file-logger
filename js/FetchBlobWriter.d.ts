import Formatter from './Formatter';
export default class FetchBlobWriter {
    readonly filePath: string;
    private readonly formatter;
    private writeStream;
    private initialBuffer;
    constructor(filePath?: string, formatter?: Formatter);
    /**
     * Ensure file exists
     */
    ensureFile(): Promise<void>;
    /**
     * Write log message via RNFetchBlob to file
     * @param loggerName name of logger
     * @param methodName method name
     * @param messages message objects
     */
    write(loggerName: string, methodName: string, messages: Array<any>): void;
    /**
     * Close file
     */
    close(): void;
}
