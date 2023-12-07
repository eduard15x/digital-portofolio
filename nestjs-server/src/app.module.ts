import { Module } from '@nestjs/common';
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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dbg',
      port: 5432,
      username: 'x',
      password: 'x',
      entities: [Project],
      database: 'x',
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
