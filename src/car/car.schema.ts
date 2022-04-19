import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CarSchema = new mongoose.Schema({
  brand: String,
  car_model: String,
  fuel_type: String,
  transmission: String,
  year: Number,
  price: Number
});

@ObjectType()
export class Car extends Document {
  @Field()
  _id: string;

  @Field()
  brand: string;

  @Field()
  car_model: string;

  @Field()
  fuel_type: string;

  @Field()
  transmission: string;

  @Field()
  year: number;

  @Field()
  price: number;
}
