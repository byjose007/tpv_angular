import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';
import { MorganModule } from 'nest-morgan';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderSchema } from './schemas/provider.schema';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Provider', schema: ProviderSchema }]),
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService]
})
export class ProvidersModule {}
