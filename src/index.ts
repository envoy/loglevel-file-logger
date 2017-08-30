export { default as FetchBlobWriter } from './FetchBlobWriter'
export { default as Formatter } from './Formatter'
export { default as defaultFormatter } from './defaultFormatter'

/**
 * Setup logger with given writer and formatter
 *
 * @param log global root logger object from loglevel
 * @param write write function we write log to
 * @param propagateToOriginal should we propgate the log message to the original
 *        logging method
 */
export default ({
  log,
  write,
  propagateToOriginal = true
}: {
  log: Log
  write: (loggerName: string, methodName: string, messages: Array<any>) => void
  propagateToOriginal?: boolean
}) => {
  const originalFactory = log.methodFactory

  log.methodFactory = (
    methodName: string,
    level: LogLevel,
    loggerName: string
  ) => {
    const originalMethod = originalFactory(methodName, level, loggerName)
    return (...objects: Array<any>) => {
      write(loggerName, methodName, objects)
      if (propagateToOriginal) {
        originalMethod.apply(undefined, objects)
      }
    }
  }
}
