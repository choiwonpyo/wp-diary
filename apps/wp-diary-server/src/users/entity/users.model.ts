import { User } from 'wp-diary-common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ collection: 'users' })
export class UserModel implements User {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    username: string;
    @Prop({ required: true })
    password: string;
    @Prop()
    description?: string | undefined;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
