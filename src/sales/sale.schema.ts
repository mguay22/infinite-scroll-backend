import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ versionKey: false })
export class Sale {
  @Prop()
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  saleDate: Date;

  @Prop()
  storeLocation: string;

  @Prop()
  couponUsed: boolean;

  @Prop()
  purchaseMethod: string;
}
