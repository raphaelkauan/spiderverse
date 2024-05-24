import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Villain } from "../entity/villain.entity";

export class CreateVillainDto extends Villain {
    id?: number;

    /**
     * Villain name. Required field and unique.
     * @example "Green elf"
     */
    @IsNotEmpty()
    @IsString()
    @MaxLength(52)
    villainName: string;

    /**
     * Description of Villain powers. Required field.
     * @example "Agility, greater resistance"
     */
    @IsNotEmpty()
    @IsString()
    powers: string;

    /**
     * Enter the ID of which Spider-Man this villain will fight. Required field.
     * @example "94088a4d-b0dc-41b2-8cd1-4bf8e2db8b56"
     */
    @IsNotEmpty()
    @IsString()
    fightVs: string;

    dataCreate?: Date;
}
