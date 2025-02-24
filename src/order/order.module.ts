import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { UsersModule } from 'src/users/users.module';
import { OrderService } from './services/order.service';
import { Order, OrderSchema } from './entities/order.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema}]),
    UsersModule
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
