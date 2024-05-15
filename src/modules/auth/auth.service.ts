import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    login(loginDto: LoginDto) {
        return loginDto;
    }

    validationSpider(spiderManName, spiderManPassword) {
        return { spiderManName, spiderManPassword };
    }
}