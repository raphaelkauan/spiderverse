import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly spiderverseRepository: SpiderverseRepository,
        private readonly jwtServiec: JwtService,
    ) {}

    async login(loginDto: LoginDto): Promise<any> {
        const spider = await this.spiderverseRepository.findBySpiderManName(loginDto.spiderManName);

        if (spider) {
            const validationPassword: boolean = await bcrypt.compare(loginDto.spiderManPassword, spider.spiderManPassword);

            if (!validationPassword) {
                throw new UnauthorizedException("Não foi possível realizar login!");
            }
        }

        const payload = {
            id: spider.id,
            spiderManName: spider.spiderManName,
            earth: spider.earth,
            powers: spider.powers,
            dataCreate: spider.dataCreate,
        };

        const token: string = this.jwtServiec.sign(payload);
        return {
            access_token: token,
        };
    }
}
