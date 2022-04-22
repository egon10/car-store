import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from '../database/database.providers';
import { carProviders } from './car.providers';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarService, ...carProviders, ...databaseProviders]
    }).compile();

    service = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of cars', async () => {
    expect(await service.findAll()).toBeInstanceOf(Array);
  });
  // filter
  it('should return an array of cars that match the filter', async () => {
    const cars = await service.findAllWithFilter({
      brand: 'BMW'
    });

    cars.forEach((car) => {
      expect(car.brand).toBe('BMW');
    });
  });
});
