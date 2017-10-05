/// Default formatter for formatting log message
export default (
  loggerName: string,
  methodName: string,
  objects: Array<any>
) => {
  const withDate = [
    new Date().toISOString(),
    loggerName,
    `[${methodName.toUpperCase()}]`,
    ...objects
  ]
  return withDate
    .map(object => {
      if (object === undefined) {
        return '[object Undefined]'
      } else if (object === null) {
        return '[object Null]'
      }
      return object.toString()
    })
    .join(' ')
}
