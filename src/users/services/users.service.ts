import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.schema';

@Injectable()
export class UsersService {
  constructor(
    // @InjectConnection() private userModel: Model<User>
    @InjectModel(User.name, 'users') private userModel: Model<User>
  ) {}
  create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);

    const user = createUser.save();

    return user;
  }

  findAll() {
    const users = this.userModel.find().exec();
    
    if (!users) {
      throw 'Users not found! '
    }
    
    return users;
  }

  findOne(id: string) {
    const user = this.userModel.findOne({id}).exec();
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
