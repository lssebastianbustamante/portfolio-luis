import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar prefijo global
  app.setGlobalPrefix('api');
  
  // Habilitar CORS para desarrollo
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:80'],
    credentials: true,
  });

  // Configurar pipes de validación globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  
  // Usar puerto correcto según entorno
  const port = process.env.NODE_ENV === 'development' 
    ? configService.get('NODE_LOCAL_PORT') || 3001
    : configService.get('NODE_DOCKER_PORT') || 3001;

  await app.listen(port);
  
  console.log(`🚀 NestJS API running on port ${port}`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
  console.log(`👥 Users: http://localhost:${port}/api/users`);
  console.log(`📝 Posts: http://localhost:${port}/api/posts`);
}
bootstrap();
