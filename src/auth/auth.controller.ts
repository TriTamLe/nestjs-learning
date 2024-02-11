import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  private _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
  }

  @Post("signup")
  signup() {
    return this._authService.signup();
  }

  @Post("signin")
  signin() {
    return this._authService.signin();
  }
}
