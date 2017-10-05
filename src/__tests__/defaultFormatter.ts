import defaultFormatter from '../defaultFormatter'

describe('defaultFormatter', () => {
  const now = new Date(1507164828273)
  it('formats strings', () => {
    expect(
      defaultFormatter('MyLogger', 'info', ['1st msg', '2nd msg'], () => now)
    ).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg 2nd msg')
  })

  it('formats undefined', () => {
    expect(
      defaultFormatter('MyLogger', 'info', ['1st msg', undefined], () => now)
    ).toEqual(
      '2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg [object Undefined]'
    )
  })

  it('formats null', () => {
    expect(
      defaultFormatter('MyLogger', 'info', ['1st msg', null], () => now)
    ).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg [object Null]')
  })

  it('formats object', () => {
    expect(
      defaultFormatter(
        'MyLogger',
        'info',
        ['1st msg', { foo: 'bar' }],
        () => now
      )
    ).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg {"foo":"bar"}')
  })

  it('formats array', () => {
    expect(
      defaultFormatter(
        'MyLogger',
        'info',
        ['1st msg', [1, [2, 3], 4]],
        () => now
      )
    ).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg [1,[2,3],4]')
  })

  it('formats numbers', () => {
    expect(
      defaultFormatter('MyLogger', 'info', ['1st msg', 1234], () => now)
    ).toEqual('2017-10-05T00:53:48.273Z MyLogger [INFO] 1st msg 1234')
  })
})
