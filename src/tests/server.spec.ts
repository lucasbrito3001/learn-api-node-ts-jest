import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User('Lucas', 'lucas.debrito@lexartlabs.com')

  expect(user.name).toEqual('Lucas')
  expect(user.email).toEqual('lucas.debrito@lexartlabs.com')
})
