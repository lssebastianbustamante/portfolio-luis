import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './../users/user.entity';
import { Post } from './../post/entities/post.entity';
import { Profile } from './../users/profile.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = this.configService.get('NODE_ENV') === 'production';
    
    return {
      type: this.configService.get<any>('DB_TYPE') || 'mysql',
      host: this.configService.get<string>('DB_HOST') || 'localhost',
      port: isProduction 
        ? this.configService.get<number>('DB_DOCKER_PORT') || 3306
        : this.configService.get<number>('DB_LOCAL_PORT') || 3307,
      username: this.configService.get<string>('DB_USERNAME') || 'root',
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME') || 'nestdb',
      entities: [User, Post, Profile],
      logging: !isProduction,
      synchronize: !isProduction, // ⚠️ Solo en desarrollo
      retryAttempts: 3,
      retryDelay: 3000,
    };
  }
}
