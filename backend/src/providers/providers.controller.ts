import { ProvidersService } from './providers.service';
import { CreateProviderDTO } from './dto/create-provider-dto';
import {
    Controller, Get, Post, Delete, Put, Body, Param, Res, Response,
    HttpStatus, UseInterceptors, NotFoundException, Query} from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('providers')
@Controller('api/v1/providers')
export class ProvidersController {

    constructor(private providersService: ProvidersService) { }

    // Add Provider: /providers/create
    @UseInterceptors(MorganInterceptor('dev'))
    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createProvider(@Res() res, @Body() createProviderDTO: CreateProviderDTO) {
        const provider = await this.providersService.createProvider(createProviderDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Provider Successfully Created',
            provider,
        });
    }

    // Get Providers /providers
    // @Get('/list')
    @UseInterceptors(MorganInterceptor('dev'))
    @Get('/')
    async getProviders(@Res() res) {
        const providers = await this.providersService.getProviders();
        return res.status(HttpStatus.OK).json(providers);
    }

    // GET single provider: /providers/5c9d46100e2e5c44c444b2d1
    @Get('/:providerID')
    async getProvider(@Res() res, @Param('providerID') providerID) {
        const provider = await this.providersService.getProvider(providerID);
        if (!provider) { throw new NotFoundException('Provider does not exist!'); }
        return res.status(HttpStatus.OK).json(provider);
    }

    // Delete Provider: /delete?providerID=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('dev'))
    @Delete('/')
    async deleteProvider(@Res() res, @Query('providerID') providerID) {
        const providerDeleted = await this.providersService.deleteProvider(providerID);
        if (!providerDeleted) { throw new NotFoundException('Provider does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Provider Deleted Successfully',
            providerDeleted,
        });
    }

    // Update Provider: /update?providerID=5c9d45e705ea4843c8d0e8f7
    @Put('/')
    async updateProvider(@Res() res, @Body() createProviderDTO: CreateProviderDTO, @Query('providerID') providerID) {
        const updatedProvider = await this.providersService.updateProvider(providerID, createProviderDTO);
        if (!updatedProvider) { throw new NotFoundException('Provider does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Provider Updated Successfully',
            updatedProvider,
        });
    }

}
