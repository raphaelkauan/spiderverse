import { IsString, MaxLength } from "class-validator";

export class UpdateVillainDto {
    @IsString()
    @MaxLength(52)
    villainName?: string;

    @IsString()
    powers?: string;

    @IsString()
    fightVs?: string;
}
