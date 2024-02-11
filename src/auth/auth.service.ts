import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
  private _prismaService: PrismaService;

  constructor(prismaService: PrismaService) {
    this._prismaService = prismaService;
  }

  signup(dto: AuthDto) {
    console.log(dto);
    return "Welcome hehe";
  }

  signin() {
    return "Good to see you again.";
  }
}
