import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const addSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle("Spiderverse")
        .setDescription("An API built with NestJS and Prisma to explore data from the lands of the spiderverse.")
        .setVersion("1.2.0")
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("v1/docs", app, document);
};
