import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/users/entities/user.schema";

@Schema()
export class Notificacao extends Document {
    @Prop({ required: true })
    id: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    user: User;

    @Prop({ required: true })
    orderAmount: number;
}

export const NotificacaoSchema = SchemaFactory.createForClass(Notificacao);