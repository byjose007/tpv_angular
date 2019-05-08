import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/customer.dto';


@Injectable()
export class CustomersService {
    

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    // Get all customers
    async getCustomers(): Promise<Customer[]> {
        const customers = await this.customerModel.find();
        return customers;
    }

    // Get a single Customer
    async getCustomer(id: string): Promise<Customer> {
        const customer = await this.customerModel.findById(id);
        return customer;
    }

    // Post a single customer
    async createCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const newCustomer = new this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }

    // Delete Customer
    async deleteCustomer(id: string): Promise<any> {
        const deletedCustomer = await this.customerModel.findByIdAndDelete(id);
        return deletedCustomer;
    }

    // Put a single customer
    async updateCustomer(id: string, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const updatedCustomer = await this.customerModel
            .findByIdAndUpdate(id, createCustomerDTO, { new: true });
        return updatedCustomer;
    }

}
