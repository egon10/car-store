import { CarService } from './car.service';
import { Car } from './car.schema';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarFilterDto } from './car.dto';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carService: CarService) {}

  @Query(() => [Car])
  async allCars(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Query(() => [Car])
  async filteredCars(
    @Args({ name: 'filter', nullable: true }) filter: CarFilterDto,
    @Args({ name: 'limit', nullable: true }) limit: number,
    @Args({ name: 'offset', nullable: true }) offset: number
  ): Promise<Car[]> {
    let cars: Car[] = await this.carService.findAllWithFilter(filter);
    if (limit) cars = cars.slice(offset, offset + limit);

    return cars;
  }
}
