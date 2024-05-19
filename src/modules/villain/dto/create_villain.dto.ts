import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Villain } from "../entity/villain.entity";

export class CreateVillainDto extends Villain {
    id?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(52)
    villainName: string;

    @IsString()
    powers: string;

    @IsString()
    fightVs: string;
}
