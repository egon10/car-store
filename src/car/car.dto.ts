import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
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

  @Field()
  image_url: string;
}

@InputType()
export class CarFilterDto {
  @Field(() => String, { nullable: true })
  brand: string;

  @Field(() => String, { nullable: true })
  car_model: string;

  @Field(() => String, { nullable: true })
  fuel_type: string;

  @Field(() => String, { nullable: true })
  transmission: string;

  @Field(() => Number, { nullable: true })
  year: number;

  @Field(() => Number, { nullable: true })
  price: number;
}
