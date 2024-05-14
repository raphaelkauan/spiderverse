import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(error, spiderverse) {
        if (error || !spiderverse) {
            throw new UnauthorizedException("Não foi possível realizar login!");
        }

        return spiderverse;
    }
}
