import { getHello } from './getHello'

describe('getHello: テスト', () => {
  test('getHello: テスト', () => {
    expect(getHello()).toBe('Hello!!')
  })
})
