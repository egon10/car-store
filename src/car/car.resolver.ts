import { CarService } from './car.service';
import { Car } from './car.schema';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carService: CarService) {}

  @Query(() => [Car])
  async cars(): Promise<Car[]> {
    return this.carService.findAll();
  }
}
