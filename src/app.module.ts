import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { CarModule } from './car/car.module';
import { CarService } from './car/car.service';
import { databaseProviders } from './database/database.providers';
import { carProviders } from './car/car.providers';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CarResolver } from './car/car.resolver';
import { CommandModule } from 'nestjs-command';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build')
    }),
    CarModule,
    DatabaseModule,
    CommandModule
  ],
  providers: [CarService, CarResolver, ...databaseProviders, ...carProviders]
})
export class AppModule {}
