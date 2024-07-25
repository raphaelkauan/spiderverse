import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { addSwagger } from "./app/config/swagger-config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("v1");

    addSwagger(app);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}
bootstrap();
