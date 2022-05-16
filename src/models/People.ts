import { names, surnames } from '../database/names.json'
import { UF } from '../database/states.json'
import { estados } from '../database/cities.json'

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

interface CitiesByStates {
  sigla: string;
  nome: string;
  cidades: string[];
}

export class People {
  name: string
  state: string
  city: string
  age: number
  randomKey: number

  constructor () {
    this.randomKey = Math.ceil(Math.random() * names.length)

    const state: States = UF[this.randomKey]
    const citiesByStates: Array<CitiesByStates> = estados

    this.name = `${names[this.randomKey]} ${surnames[this.randomKey]}`
    this.age = Math.ceil(Math.random() * 100)
    this.state = `${state.sigla} - ${state.nome}`
    this.city = `${citiesByStates.find(item => item.sigla === state.sigla)}`
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
}
