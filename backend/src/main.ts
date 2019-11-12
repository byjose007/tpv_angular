import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('TPV Management')
    .setDescription('Tpv API description')
    .setVersion('1.0')
    .addTag('TPV Management')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/documentation', app, document);

  // app.use(bodyParser.json());
  await app.listen(3001);


 
}
bootstrap();

