import { Document } from 'mongoose';
// import {User} from '../../shared/interfaces/user.interface';


export interface Provider extends Document{
    readonly name: string;
    readonly email: string;
    readonly city?: string;
    readonly adress: string;
    readonly document: string;
    readonly isActive: boolean;
    readonly imageURL?: string;
    readonly birthDate?: Date;
    readonly createdAt: Date;
}

