import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { VillainService } from "./villain.service";
import { CreateVillainDto } from "./dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";
import { UpdateVillainDto } from "./dto/update_villain.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("villain")
@ApiBearerAuth()
@Controller("villain")
export class VillainController {
    constructor(private readonly villainService: VillainService) {}

    @Post()
    @ApiOperation({ summary: "Create a new Villain" })
    createVillain(@Body() createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        return this.villainService.createVillain(createVillainDto);
    }

    @Get()
    @ApiOperation({ summary: "Get all Villain" })
    findAllVillain(@Query("pageIndex") pageIndex?: string): Promise<VillainInterface[]> {
        return this.villainService.findAllVillain(pageIndex);
    }

    @Get(":id")
    @ApiOperation({ summary: "Get a Villain" })
    findOneVillain(@Param("id") id: string): Promise<VillainInterface> {
        return this.villainService.findOneVillain(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Update a Villain" })
    updateVillain(@Param("id") id: string, @Body() updateVillainDto: UpdateVillainDto): Promise<any> {
        return this.villainService.updateVillain(id, updateVillainDto);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete a Villain" })
    deleteVillain(@Param("id") id: string): Promise<any> {
        return this.villainService.deleteVillain(id);
    }
}
