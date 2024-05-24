import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("v1");

    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle("Spiderverse")
        .setDescription("An API built with NestJS and Prisma to explore data from the lands of the spiderverse.")
        .setVersion("1.0")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("v1/docs", app, document);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}
bootstrap();
