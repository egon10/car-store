import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from '../database/database.providers';
import { carProviders } from './car.providers';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';

describe('CarResolver', () => {
  let resolver: CarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
      providers: [
        CarResolver,
        CarService,
        ...carProviders,
        ...databaseProviders
      ]
    }).compile();

    resolver = module.get<CarResolver>(CarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
