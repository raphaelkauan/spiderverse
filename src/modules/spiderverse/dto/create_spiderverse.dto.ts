import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Spiderverse } from "../entity/spiderverse.entity";

export class CreateSpiderverseDto extends Spiderverse {
    id?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(52)
    spiderManName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password too weak!",
    })
    spiderManPassword: string;

    @IsNotEmpty()
    @IsNumber()
    earth: number;

    @IsNotEmpty()
    @IsString()
    powers: string;

    dataCreate?: Date;
}
