import { People } from '../../models/People'

it('it should be ok', () => {
  const people = new People()

  expect(people.createPeople()).toHaveProperty(['name', 'city', 'state', 'age'])
})
