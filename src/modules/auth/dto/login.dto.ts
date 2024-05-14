import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    spiderManName: string;

    @IsNotEmpty()
    @IsString()
    spiderManPassword: string;
}
