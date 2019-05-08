import { MongooseModule } from '@nestjs/mongoose';
import { MorganModule } from 'nest-morgan';
import { ManagerSchema } from './manager.schema';
import { Module } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { ManagersController } from './managers.controller';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Manager', schema: ManagerSchema }]),
  ],
  controllers: [ManagersController],
  providers: [ManagersService]
})
export class ManagersModule {}
