import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificacaoModule } from './notificacao/notificacao.module';

require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true 
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(<string>process.env.MONGO_URI, {
      connectionName: 'admin',
    }),
    MongooseModule.forRoot(<string>process.env.MONGO_URI2, {
      connectionName: 'nestjs',
    }),
    UsersModule, 
    OrderModule, NotificacaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
