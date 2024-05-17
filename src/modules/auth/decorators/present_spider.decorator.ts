import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const PresentSpiderMan = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<any>();
    return req.user;
});
