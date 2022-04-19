import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(MONGO_DB_URL)
  }
];
