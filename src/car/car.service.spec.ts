import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from '../database/database.providers';
import { carProviders } from './car.providers';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  const mocked_car_data = [
    {
      brand: 'BMW',
      car_model: 'X5',
      price: 100000,
      year: 2019
    },
    {
      brand: 'Tesla',
      car_model: 'Model X',
      fuel_type: 'Electric',
      transmission: '1v, Automatic',
      year: 2022,
      price: 99990,
      image_url: 'https://media.autoweek.nl/m/f1nybiubxysa_800.jpg'
    },
    {
      brand: 'Volkswagen',
      car_model: 'Golf 8 GTI',
      fuel_type: 'Petrol',
      transmission: '7v, Automatic',
      year: 2021,
      price: 38890,
      image_url:
        'https://www.autovisie.nl/wp-content/uploads/2020/01/VW_Golf_GTI.jpg'
    }
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
      providers: [CarService, ...databaseProviders, ...carProviders]
    }).compile();

    service = module.get<CarService>(CarService);

    const mock_functions = {
      findAll: jest.fn().mockReturnValue(mocked_car_data)
    };

    jest
      .spyOn(service, 'findAll')
      .mockImplementation(() => mock_functions.findAll());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of cars', async () => {
    const result = await service.findAll();
    expect(result).toBeDefined();
    expect(result).toBe(mocked_car_data);
  });

  it('should return an array of cars that match the filter', async () => {
    const cars = await service.findAllWithFilter({
      brand: 'BMW'
    });

    cars.forEach((car) => {
      expect(car.brand).toBe('BMW');
    });
  });
});
