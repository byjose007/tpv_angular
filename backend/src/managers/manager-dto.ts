import { CreateUserDTO } from '../shared/user-dto';
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class ManagerDTO extends CreateUserDTO {
    // @ApiModelProperty()
    // readonly password: string;
    // @ApiModelProperty()
    // readonly lastLogin: string;

}
