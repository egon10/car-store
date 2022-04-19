import { Connection } from 'mongoose';
import { CarSchema } from './car.schema';

export const carProviders = [
  {
    provide: 'CAR_MODEL',
    useFactory: (connection: Connection) => connection.model('Cars', CarSchema),
    inject: ['DATABASE_CONNECTION']
  }
];
