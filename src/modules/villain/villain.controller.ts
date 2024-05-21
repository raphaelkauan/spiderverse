import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { VillainService } from "./villain.service";
import { CreateVillainDto } from "./dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";
import { UpdateVillainDto } from "./dto/update_villain.dto";

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

    @Patch(":id")
    updateVillain(@Param("id") id: string, @Body() updateVillainDto: UpdateVillainDto): Promise<any> {
        return this.villainService.updateVillain(id, updateVillainDto);
    }

    @Delete(":id")
    deleteVillain(@Param("id") id: string): Promise<any> {
        return this.villainService.deleteVillain(id);
    }
}
