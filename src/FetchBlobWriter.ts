import RNFetchBlob from 'react-native-fetch-blob'

import Formatter from './Formatter'
import defaultFormatter from './defaultFormatter'

export default class FetchBlobWriter {
  /// File path we are writing logs to
  readonly filePath: string

  private readonly formatter: Formatter
  private writeStream: any = null
  private initialBuffer: Array<string> = []

  constructor (
    filePath: string = RNFetchBlob.fs.dirs.DocumentDir + '/log.txt',
    formatter: Formatter = defaultFormatter
  ) {
    this.filePath = filePath
    this.formatter = formatter
  }

  /**
   * Ensure file exists
   */
  ensureFile (): Promise<void> {
    if (this.writeStream) {
      return Promise.resolve()
    }
    return RNFetchBlob.fs
      .exists(this.filePath)
      .then(exists => {
        if (!exists) {
          return RNFetchBlob.fs.createFile(this.filePath, '', 'utf8')
        }
        return Promise.resolve()
      })
      .then(() =>
        RNFetchBlob.fs.writeStream(this.filePath, 'utf8').then(stream => {
          this.writeStream = stream
          this.writeStream.write(this.initialBuffer.join('\n') + '\n')
          this.initialBuffer = []
        })
      )
  }

  /**
   * Write log message via RNFetchBlob to file
   * @param loggerName name of logger
   * @param methodName method name
   * @param messages message objects
   */
  write (loggerName: string, methodName: string, messages: Array<any>): void {
    const formatted = this.formatter(loggerName, methodName, messages)
    if (!this.writeStream) {
      this.initialBuffer.push(formatted)
    } else {
      this.writeStream.write(formatted + '\n')
    }
  }

  /**
   * Close file
   */
  close () {
    if (!this.writeStream) {
      return
    }
    this.writeStream.close()
  }
}
