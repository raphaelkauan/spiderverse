import { IsNumber, IsString, MaxLength } from "class-validator";

export class UpdateSpiderverseDto {
    @IsString()
    @MaxLength(52)
    spiderManName?: string;

    @IsNumber()
    earth?: number;

    @IsString()
    powers?: string;
}
