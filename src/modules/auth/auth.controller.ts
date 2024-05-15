import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LocalAuthGuard } from "./guards/local.auth.guard";

@Controller("login")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
