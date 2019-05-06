import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class CreateCustomerDTO {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly city?: string;
    @ApiModelProperty()
    readonly adress: string;
    @ApiModelProperty()
    readonly document: string;
    @ApiModelProperty()
    readonly isActive: boolean;
    @ApiModelProperty()
    readonly imageURL?: string;
    @ApiModelProperty()
    readonly birthDate?: any;
    @ApiModelProperty()
    readonly createdAt: any;
}