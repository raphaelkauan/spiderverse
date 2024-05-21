import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { VillainService } from "./villain.service";
import { CreateVillainDto } from "./dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";

@Controller("villain")
export class VillainController {
    constructor(private readonly villainService: VillainService) {}

    @Post()
    createVillain(@Body() createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        return this.villainService.createVillain(createVillainDto);
    }

    @Get()
    findAllVillain(@Query("pageIndex") pageIndex?: string): Promise<VillainInterface[]> {
        return this.villainService.findAllVillain(pageIndex);
    }

    @Get(":id")
    findOneVillain(@Param("id") id: string): Promise<VillainInterface> {
        return this.villainService.findOneVillain(id);
    }
}
