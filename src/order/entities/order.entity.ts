import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: String, default: "", lowercase: true, maxlength: 32})
  address: string;

  @Prop({ type: String, index: true, unique: true })
  username: string;

  @Prop({ type: Date, default: Date.now() })
  time: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);