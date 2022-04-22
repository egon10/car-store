import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarModule } from './car/car.module';
import { CarService } from './car/car.service';
import { databaseProviders } from './database/database.providers';
import { carProviders } from './car/car.providers';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CarResolver } from './car/car.resolver';
import { CommandModule } from 'nestjs-command';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true
    }),
    CarModule,
    DatabaseModule,
    CommandModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CarService,
    CarResolver,
    ...databaseProviders,
    ...carProviders
  ]
})
export class AppModule {}
