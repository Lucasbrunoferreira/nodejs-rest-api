import somar from '../src/server'

test('should return given a correct value', (): void => {
  expect(somar(10, 20)).toBe(30)
})
