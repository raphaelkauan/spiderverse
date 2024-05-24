import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Spiderverse } from "../entity/spiderverse.entity";

export class CreateSpiderverseDto extends Spiderverse {
    id?: string;

    /**
     * Spider-Man name. Required field and unique.
     * @example "Miles Morales"
     */
    @IsNotEmpty()
    @IsString()
    @MaxLength(52)
    spiderManName: string;

    /**
     * Spider-Man password. Required field.
     * @example 123321
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password too weak!",
    })
    spiderManPassword: string;

    /**
     * Spider-Man Earth number. Required field.
     * @example 1610
     */
    @IsNotEmpty()
    @IsNumber()
    earth: number;

    /**
     * Description of Spider-Man powers. Required field.
     * @example "Super strength, agility, spider-sense"
     */
    @IsNotEmpty()
    @IsString()
    powers: string;

    dataCreate?: Date;
}
