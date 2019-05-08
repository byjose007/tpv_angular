import { ManagersService } from './managers.service';
import { ManagerDTO } from './manager-dto';

import {
    Controller, Get, Post, Delete, Put, Body, Param, Res, Response,
    HttpStatus, UseInterceptors, NotFoundException, Query} from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';


@ApiUseTags('managers')
@Controller('api/v1/managers')
export class ManagersController {


    constructor(private readonly managersService: ManagersService) {
    }



    // Add Item: /items/create
    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createItem(@Res() res, @Body() managerDTO: ManagerDTO) {
        const item = await this.managersService.create(managerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Item Successfully Created',
            item,
        });
    }

    // Get Items /items
    // @Get('/list')
    @Get('/')
    async getItems(@Res() res) {
        const items = await this.managersService.getAll();
        return res.status(HttpStatus.OK).json(items);
    }

    // GET single item: /items/5c9d46100e2e5c44c444b2d1
    @Get('/:id')
    async getItem(@Res() res, @Param('id') id: string) {
        const item = await this.managersService.get(id);
        if (!item) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json(item);
    }

    // Delete Item: /delete?id=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/')
    async deleteItem(@Res() res, @Param('id') id: string) {
        const itemDeleted = await this.managersService.delete(id);
        if (!itemDeleted) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item Deleted Successfully',
            itemDeleted,
        });
    }

    // Update Item: /update?id=5c9d45e705ea4843c8d0e8f7
    @Put('/')
    async updateItem(@Res() res, @Body() managerDTO: ManagerDTO, @Param('id') id: string) {
        const updatedItem = await this.managersService.update(id, managerDTO);
        if (!updatedItem) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item Updated Successfully',
            updatedItem,
        });
    }

}
