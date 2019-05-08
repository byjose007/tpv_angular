import { Manager } from './manager.interface';
import { ManagerDTO } from './manager-dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ManagersService{

    constructor(@InjectModel('Manager') private readonly managerModel: Model<Manager> ){}

    async getAll(): Promise<Manager[]> {
        const customers = await this.managerModel.find();
        return customers;
    }

    async get(id: string): Promise<Manager> {
        const item = await this.managerModel.findById(id);
        return item;
    }

    async update(id: string, managerDTO: ManagerDTO): Promise<Manager> {
        const updatedItem = await this.managerModel
            .findByIdAndUpdate(id, managerDTO, { new: true });
        return updatedItem;
    }

    async create(managerDTO: ManagerDTO): Promise<Manager> {
        const newItem = new this.managerModel(managerDTO);
        return newItem.save();
    }

    async delete(id: string): Promise<Manager> {
        const deletedItem = await this.managerModel.findByIdAndDelete(id);
        return deletedItem;
    }

}
