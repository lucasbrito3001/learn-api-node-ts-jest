import { names, surnames } from '../database/names.json'
import { UF } from '../database/states.json'
import cities from '../database/cities.json'

interface PeopleDTO {
  name: string;
  age: number;
  state: string;
  city: string;
}

interface States {
  nome: string;
  sigla: string;
}

export class People {
  name: string
  state: string
  city: string
  age: number

  constructor () {
    const selectedState = UF[this.generateRandomKey(UF.length)]
    const state: States = selectedState
    const citiesByselectedState = cities[state.sigla as keyof typeof cities]

    this.name = `${names[this.generateRandomKey(names.length)]} ${surnames[this.generateRandomKey(surnames.length)]}`
    this.age = Math.ceil(Math.random() * 100)
    this.state = `${state.sigla} - ${state.nome}`

    this.city = `${citiesByselectedState[this.generateRandomKey(citiesByselectedState.length)]}`
  }

  createPeople = () => {
    const people: PeopleDTO = {
      name: this.name,
      age: this.age,
      state: this.state,
      city: this.city
    }

    return people
  }

  generateRandomKey = (length: number) => {
    return Math.ceil(Math.random() * length)
  }
}
