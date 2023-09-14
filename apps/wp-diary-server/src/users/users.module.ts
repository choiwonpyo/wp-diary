import { Module } from '@nestjs/common';
import { UsersService } from './services/users-service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './entity/users.model';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserModel.name, schema: UserSchema },
        ]),
    ],
    providers: [UsersService],
})
export class UsersModule {}
