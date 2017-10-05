/// Default formatter for formatting log message
export default (
  loggerName: string,
  methodName: string,
  objects: Array<any>,
  now?: () => Date
) => {
  const withDate = [
    now ? now().toISOString() : new Date().toISOString(),
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
      } else if (Object.prototype.toString.call(object) === '[object Object]') {
        return JSON.stringify(object)
      }
      return object.toString()
    })
    .join(' ')
}
