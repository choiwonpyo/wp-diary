import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from '../entity/users.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserModel>,
    ) {}

    hello() {
        const a = { hello: 'world' };
        console.log(a);
        return 'world';
    }
}
