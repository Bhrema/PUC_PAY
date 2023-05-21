import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.use(
    cookieSession({
      keys: ['asdfasfd'],
    }),
  );
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  await app.listen(3000);
}
bootstrap();
