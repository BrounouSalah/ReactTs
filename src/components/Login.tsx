import React, { SyntheticEvent } from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import history from "../utils/history";
interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}
interface LoginState {
  username: string;
  password: string;
  loginAttempted: boolean;
  loginSuccesfull: boolean;
}
interface CustomEvent {
  target: HTMLInputElement;
}
export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: "",
    loginAttempted: false,
    loginSuccesfull: false,
  };
  private setUserName(event: CustomEvent) {
    this.setState({ username: event.target.value });
  }
  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempted: true });
    const result = await this.props.authService.login(
      this.state.username,
      this.state.password
    );
    if (result) {
      this.setState({ loginSuccesfull: true });
      this.props.setUser(result);
      history.push("/profile");
    } else {
      this.setState({ loginSuccesfull: false });
    }
  }
  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      if (this.state.loginSuccesfull) {
        loginMessage = <label>Login Succesfull</label>;
      } else {
        loginMessage = <label>Login Failed</label>;
      }
    }
    return (
      <div>
        <h2>Please Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.setUserName(e)}
            value={this.state.username}
          />

          <br />
          <input
            onChange={(e) => this.setPassword(e)}
            value={this.state.password}
            type="password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        {loginMessage}
      </div>
    );
  }
}
