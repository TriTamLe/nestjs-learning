import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: "postgresql://postgres:Nhuanthien@localhost:5432/nest-tutorial?schema=public"
        }
      }
    });
  }
}
