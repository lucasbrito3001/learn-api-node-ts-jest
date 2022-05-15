export class User {
  firstName: string
  lastName: string
  email: string

  constructor (name: string, surname: string, email: string) {
    this.firstName = name
    this.lastName = surname
    this.email = email
  }

  fullName = () => {
    return (this.firstName && this.lastName)
      ? `${this.firstName} ${this.lastName}`
      : 'First name or last name are missing'
  }
}
