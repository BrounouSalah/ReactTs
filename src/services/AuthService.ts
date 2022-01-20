import { User } from "../model/Model";

export class AuthService {
  public async login(
    username: string,
    password: string
  ): Promise<User | undefined> {
    if (username === "user" && password === "1234") {
      return {
        username: username,
        email: "some@email.com",
      };
    } else {
      return undefined;
    }
  }
}
