import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document{
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    name: string;

    @Prop({unique: true, required: true })
    email: string;

    @Prop({ required: true })
    senha: string;

    @Prop()
    avatarUrl: string;

    @Prop({ required: true, default: 0 })
    balance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);