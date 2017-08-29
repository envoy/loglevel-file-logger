"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_fetch_blob_1 = require("react-native-fetch-blob");
const defaultFormatter_1 = require("./defaultFormatter");
class FetchBlobWriter {
    constructor(filePath = react_native_fetch_blob_1.default.fs.dirs.DocumentDir + '/log.txt', formatter = defaultFormatter_1.default) {
        this.writeStream = null;
        this.initialBuffer = [];
        this.filePath = filePath;
        this.formatter = formatter;
    }
    /**
     * Ensure file exists
     */
    ensureFile() {
        if (this.writeStream) {
            return Promise.resolve();
        }
        return react_native_fetch_blob_1.default.fs
            .exists(this.filePath)
            .then(exists => {
            if (!exists) {
                return react_native_fetch_blob_1.default.fs.createFile(this.filePath, '', 'utf8');
            }
            return Promise.resolve();
        })
            .then(() => react_native_fetch_blob_1.default.fs.writeStream(this.filePath, 'utf8').then(stream => {
            this.writeStream = stream;
            this.writeStream.write(this.initialBuffer.join('\n') + '\n');
            this.initialBuffer = [];
        }));
    }
    /**
     * Write log message via RNFetchBlob to file
     * @param loggerName name of logger
     * @param methodName method name
     * @param messages message objects
     */
    write(loggerName, methodName, messages) {
        const formatted = this.formatter(loggerName, methodName, messages);
        if (!this.writeStream) {
            this.initialBuffer.push(formatted);
        }
        else {
            this.writeStream.write(formatted + '\n');
        }
    }
    /**
     * Close file
     */
    close() {
        if (!this.writeStream) {
            return;
        }
        this.writeStream.close();
    }
}
exports.default = FetchBlobWriter;
