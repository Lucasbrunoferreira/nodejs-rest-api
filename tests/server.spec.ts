import methods from '../src/server'

test('should return given a correct value', (): void => {
  expect(methods.somar(10, 20)).toBe(30)
})
