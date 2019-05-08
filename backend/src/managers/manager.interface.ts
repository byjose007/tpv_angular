import { Manager } from './manager.interface';
import { Document } from 'mongoose';
import { IUser } from 'src/shared/IUser';



export interface Manager extends Document, IUser{
    readonly password: string;
    readonly lastLogin?: Date;
}


