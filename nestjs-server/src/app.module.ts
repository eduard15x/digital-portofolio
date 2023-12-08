import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';
import { MulterModule } from '@nestjs/platform-express';
import { ImageController } from './image.controller';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DB_HOST),
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USERNAME),
      password: String(process.env.DB_PASSWORD),
      entities: [Project],
      database: String(process.env.DB_DATABASE),
      synchronize: true,
      ssl: true,
    }),
    ProjectModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController, ImageController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
