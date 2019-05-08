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
    MongooseModule.forRoot('mongodb://localhost/tpv-db', {
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
