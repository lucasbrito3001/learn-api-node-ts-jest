import { People } from '../../models/People'

describe('Testing the model People', () => {
  test('generating new people', () => {
    const people = new People()

    expect(people.createPeople()).toHaveProperty('name')
  })
})
