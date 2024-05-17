import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { SpiderverseRepository } from "src/database/repository/spiderverse.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private readonly spiderverseRepository: SpiderverseRepository) {}

    async login(loginDto: LoginDto): Promise<any> {
        const spider = await this.spiderverseRepository.findBySpiderManName(loginDto.spiderManName);

        if (spider) {
            const validationPassword = await bcrypt.compare(loginDto.spiderManPassword, spider.spiderManPassword);

            if (validationPassword) {
                return {
                    ...spider,
                    spiderManPassword: undefined,
                };
            }
        }
        return null;
    }
}
