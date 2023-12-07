import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';
import { MulterModule } from '@nestjs/platform-express';
import { ImageController } from './image.controller';
import { CloudinaryService } from './cloudinary.service';

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      entities: [Project],
      database: DB_DATABASE,
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
