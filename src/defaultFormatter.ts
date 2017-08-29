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
  return withDate.map(object => object.toString()).join(' ')
}
