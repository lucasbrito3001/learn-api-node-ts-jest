import { User } from '@models/User'

export class UsersController {
  teste (name: string, email: string) {
    const user = new User(name, email)

    return user
  };
}
