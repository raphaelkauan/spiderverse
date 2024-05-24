import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { IsPublic } from "./decorators/is_public.decorator";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @IsPublic()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Log in" })
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }
}
