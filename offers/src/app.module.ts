import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppService} from './services/app.service';
import {AppController} from './controller/app.controller';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mariadb',
          host: 'mariadb',
          port: 3306,
          username: 'root',
          password: '123456',
          database: 'offers',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),

  ],
  controllers: [AppController],
  providers: [ AppService ],
})
export class AppModule {}
