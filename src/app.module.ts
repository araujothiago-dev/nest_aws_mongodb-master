import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificacoesModule } from './notificacoes/notificacoes.module';

require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true 
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(<string>process.env.MONGO_URI, {
      connectionName: 'orders',
    }),
    MongooseModule.forRoot(<string>process.env.MONGO_URI2, {
      connectionName: 'users',
    }),
    UsersModule, 
    OrderModule, NotificacoesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
