import { Inject, Injectable } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { Car } from './car.schema';
import { CreateCarInput } from './car.dto';

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

  async findAllWithFilter(filter: FilterQuery<Car>): Promise<Car[]> {
    return this.carModel.find(filter).lean();
  }

  async createCar(car: CreateCarInput): Promise<Car> {
    const createdCar = new this.carModel(car);
    return await createdCar.save();
  }

  async searchCars(text: string): Promise<Car[]> {
    return this.carModel
      .find({
        $text: { $search: text, $caseSensitive: false }
      })
      .lean();
  }
}
