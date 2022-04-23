import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { DatabaseModule } from 'src/database/database.module';
import { CarResolver } from './car.resolver';
import { carProviders } from './car.providers';

@Module({
  imports: [DatabaseModule],
  providers: [CarResolver, CarService, ...carProviders]
})
export class CarModule {}
