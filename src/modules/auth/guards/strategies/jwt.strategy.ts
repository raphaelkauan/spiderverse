import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_TOKEN,
        });
    }

    async validate(payload: { id: string; spiderManName: string; earth: number; powers: string; dataCreate: Date }) {
        try {
            return {
                ...payload,
            };
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
