import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarModule } from './car/car.module';
import { CarService } from './car/car.service';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [GraphQLModule.forRoot({}), CarModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, CarService, ...databaseProviders]
})
export class AppModule {}
