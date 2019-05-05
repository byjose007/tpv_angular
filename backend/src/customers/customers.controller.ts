import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dto/customer.dto';
import { Controller, Get, Post, Delete, Put, Body, Param, Res, HttpStatus, UseInterceptors, NotFoundException, Query } from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService) { }

   // Add Customer: /customers/create
   @Post('/create')
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
   @Get('/:customerID')
   async getCustomer(@Res() res, @Param('customerID') customerID) {
       const customer = await this.customersService.getCustomer(customerID);
       if (!customer) { throw new NotFoundException('Customer does not exist!'); }
       return res.status(HttpStatus.OK).json(customer);
   }

   // Delete Customer: /delete?customerID=5c9d45e705ea4843c8d0e8f7
   @UseInterceptors(MorganInterceptor('combined'))
   @Delete('/delete')
   async deleteCustomer(@Res() res, @Query('customerID') customerID) {
       const customerDeleted = await this.customersService.deleteCustomer(customerID);
       if (!customerDeleted) { throw new NotFoundException('Customer does not exist!'); }
       return res.status(HttpStatus.OK).json({
           message: 'Customer Deleted Successfully',
           customerDeleted,
       });
   }

   // Update Customer: /update?customerID=5c9d45e705ea4843c8d0e8f7
   @Put('/update')
   async updateCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO, @Query('customerID') customerID) {
       const updatedCustomer = await this.customersService.updateCustomer(customerID, createCustomerDTO);
       if (!updatedCustomer) { throw new NotFoundException('Customer does not exist!'); }
       return res.status(HttpStatus.OK).json({
           message: 'Customer Updated Successfully',
           updatedCustomer,
       });
   }

}
