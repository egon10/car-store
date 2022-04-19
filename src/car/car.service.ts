import { Inject, Injectable } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { Car } from './car.schema';

@Injectable()
export class CarService {
  constructor(
    @Inject('CAR_MODEL')
    private readonly carModel: Model<Car>
  ) {}

  async findOne(filter: FilterQuery<Car>): Promise<Car> {
    return this.carModel.findOne(filter);
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().lean();
  }
}
