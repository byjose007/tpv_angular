import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';

import { MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
  ],
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule { }
