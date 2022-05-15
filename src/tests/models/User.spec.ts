import { User } from '../../models/User'

it('it should be ok', () => {
  const firstUser = new User('Lucas', 'de Brito', 'lucas@teste.com')

  expect(firstUser.firstName).toStrictEqual('Lucas')
  expect(firstUser.email).toEqual('lucas@teste.com')

  expect(firstUser.fullName()).toBe('Lucas de Brito')

  const secondUser = new User('Lucas', '', 'lucas@teste.com')

  expect(secondUser.fullName()).toBe('First name or last name are missing')
})
