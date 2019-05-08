import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dto/customer.dto';
import {
    Controller, Get, Post, Delete, Put, Body, Param, Res, Response,
    HttpStatus, UseInterceptors, NotFoundException} from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('customers')
@Controller('api/v1/customers')
export class CustomersController {

    constructor(private customersService: CustomersService) { }

    // Add Customer: /customers/create
    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customersService.createCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Customer Successfully Created',
            customer,
        });
    }

    // Get Customers /customers
    // @Get('/list')
    @Get('/')
    async getCustomers(@Res() res) {
        const customers = await this.customersService.getCustomers();
        return res.status(HttpStatus.OK).json(customers);
    }

    // GET single customer: /customers/5c9d46100e2e5c44c444b2d1
    @Get('/:id')
    async getCustomer(@Res() res, @Param('id') id:string) {
        const customer = await this.customersService.getCustomer(id);
        if (!customer) { throw new NotFoundException('Customer does not exist!'); }
        return res.status(HttpStatus.OK).json(customer);
    }

    // Delete Customer: /delete?id=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/')
    async deleteCustomer(@Res() res, @Param('id') id:string) {
        const customerDeleted = await this.customersService.deleteCustomer(id);
        if (!customerDeleted) { throw new NotFoundException('Customer does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Customer Deleted Successfully',
            customerDeleted,
        });
    }

    // Update Customer: /update?id=5c9d45e705ea4843c8d0e8f7
    @Put('/')
    async updateCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO, @Param('id') id) {
        const updatedCustomer = await this.customersService.updateCustomer(id, createCustomerDTO);
        if (!updatedCustomer) { throw new NotFoundException('Customer does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Customer Updated Successfully',
            updatedCustomer,
        });
    }

}
