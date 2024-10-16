import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import { PrismaService } from "src/database/prisma.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./guards/strategies/jwt.strategy";
import * as dotenv from "dotenv";
dotenv.config();

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET_TOKEN,
            signOptions: { expiresIn: "30d" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, SpiderverseRepository, PrismaService, JwtStrategy],
})
export class AuthModule {}
