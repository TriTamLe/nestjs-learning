import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signup() {
    return "Welcome hehe";
  }

  signin() {
    return "Good to see you again.";
  }
}
