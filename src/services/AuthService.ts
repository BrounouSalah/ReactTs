import { User, UserAttribute } from "../model/Model";

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
  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({
      Name: "description",
      Value: "Best user ever!",
    });
    result.push({
      Name: "Job",
      Value: "Engineer",
    });
    result.push({
      Name: "age",
      Value: "25",
    });
    result.push({
      Name: "experience",
      Value: "3 years",
    });
    return result;
  }
}
