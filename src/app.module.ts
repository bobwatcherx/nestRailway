import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';


@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-27.railway.app',
      port: 6242,
      username: 'root',
      password: 'HVFoWhiPjndBHhYTAsm7',
      database: 'railway',
      entities: [User],
      synchronize: true,
    }),
   TypeOrmModule.forFeature([User])
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
