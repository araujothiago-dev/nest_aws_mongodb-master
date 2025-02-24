import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
  } });

  await app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: false
    }),
  );

  await app.listen(parseInt(<string>process.env.PORT));
}
bootstrap();
