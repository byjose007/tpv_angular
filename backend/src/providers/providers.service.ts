import { Injectable } from '@nestjs/common';
import { Provider } from './interfaces/provider.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProviderDTO } from './dto/create-provider-dto';

@Injectable()
export class ProvidersService {

    constructor(@InjectModel('Provider') private readonly providerModel: Model<Provider>) { }

    // Get all providers
    async getProviders(): Promise<Provider[]> {
        const providers = await this.providerModel.find();
        return providers;
    }

    // Get a single Provider
    async getProvider(id: string): Promise<Provider> {
        const provider = await this.providerModel.findById(id);
        return provider;
    }

    // Post a single provider
    async createProvider(createProviderDTO: CreateProviderDTO): Promise<Provider> {
        const newProvider = new this.providerModel(createProviderDTO);
        return newProvider.save();
    }

    // Delete Provider
    async deleteProvider(id: string): Promise<any> {
        const deletedProvider = await this.providerModel.findByIdAndDelete(id);
        return deletedProvider;
    }

    // Put a single provider
    async updateProvider(id: string, createProviderDTO: CreateProviderDTO): Promise<Provider> {
        const updatedProvider = await this.providerModel
            .findByIdAndUpdate(id, createProviderDTO, { new: true });
        return updatedProvider;
    }
}
