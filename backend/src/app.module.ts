import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { CustomersModule } from './customers/customers.module';
import { ProvidersModule } from './providers/providers.module';
import { ManagersModule } from './managers/managers.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin_mongo:admin123@cluster0-3slxt.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }),
    CustomersModule,
    ProvidersModule,
    ManagersModule],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}


// MongoDB local 'mongodb://localhost/tpv-db'