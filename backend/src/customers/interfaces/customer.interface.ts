import { IUser } from 'src/shared/IUser';
import { Document } from 'mongoose';
// import {User} from '../../shared/interfaces/user.interface';


export interface Customer extends Document, IUser{
}

