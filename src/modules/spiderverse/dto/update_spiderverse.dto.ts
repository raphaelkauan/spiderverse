import { IsNumber, IsString, MaxLength } from "class-validator";

export class UpdateSpiderverseDto {
    /**
     * Spider-Man name.
     * @example "Miles Morales"
     */
    @IsString()
    @MaxLength(52)
    spiderManName?: string;

    /**
     * Spider-Man Earth number.
     * @example 1610
     */
    @IsNumber()
    earth?: number;

    /**
     * Description of Spider-Man powers.
     * @example "Super strength, agility, spider-sense"
     */
    @IsString()
    powers?: string;
}
