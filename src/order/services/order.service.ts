import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly userService: UsersService) {}
  async create(createOrderDto: CreateOrderDto) {
    // const user: User = await this.userService.findOne(createOrderDto.userId);

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
