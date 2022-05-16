import { User } from '@models/People'

export class UsersController {
  teste (name: string, email: string) {
    const user = new User(name, email)

    return user
  };
}
