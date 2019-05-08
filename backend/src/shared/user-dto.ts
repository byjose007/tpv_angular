import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly email: string;
    @ApiModelPropertyOptional()
    readonly city?: string;
    @ApiModelProperty()
    readonly adress: string;
    @ApiModelProperty()
    readonly document: string;
    @ApiModelProperty()
    readonly isActive: boolean;
    @ApiModelPropertyOptional()
    readonly imageURL?: string;
    @ApiModelPropertyOptional()
    readonly birthDate?: any;
    @ApiModelProperty()
    readonly createdAt: any;
}