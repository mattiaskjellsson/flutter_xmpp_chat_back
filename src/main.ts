import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config({ path: './.env' });
  const app = await NestFactory.create(AppModule);
  console.log(`Environment port: ${process.env.API_PORT}`);
  await app.listen(process.env.API_PORT ?? 3000);
}
bootstrap();
