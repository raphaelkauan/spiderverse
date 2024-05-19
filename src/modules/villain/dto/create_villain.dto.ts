import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Villain } from "../entity/villain.entity";

export class CreateVillainDto extends Villain {
    id?: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(52)
    villainName: string;

    @IsNotEmpty()
    @IsString()
    powers: string;

    @IsNotEmpty()
    @IsString()
    fightVs: string;
}
