import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller()
export class AuthController {
  private _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
  }

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this._authService.signup();
  }

  @Post("signin")
  signin() {
    return this._authService.signin();
  }
}
