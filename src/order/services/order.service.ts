import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.schema';
import { UsersService } from 'src/users/services/users.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { Order } from '../entities/order.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name, 'admin') private orderModel: Model<Order>
  ) {}
  
  async create(createOrderDto: CreateOrderDto) {
    // const user: User = await this.userService.findOne(createOrderDto.user);

    // if (user.balance < createOrderDto.orderAmount) {

    // }
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
