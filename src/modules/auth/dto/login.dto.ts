import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    /**
     * Spider-Man's name. Required field and unique.
     * @example "Miles Morales"
     */
    @IsNotEmpty()
    @IsString()
    spiderManName: string;

    /**
     * Spider-Man's password. Required field.
     * @example 123321
     */
    @IsNotEmpty()
    @IsString()
    spiderManPassword: string;
}
