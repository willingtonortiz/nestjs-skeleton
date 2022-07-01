import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  // CORS configuration
  app.enableCors({ origin: ['*'] });

  await app.listen(3000);
}

bootstrap();
