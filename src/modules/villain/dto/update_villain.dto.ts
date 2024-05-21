import { PartialType } from "@nestjs/swagger";
import { CreateVillainDto } from "./create_villain.dto";

export class UpdateVillainDto extends PartialType(CreateVillainDto) {}
