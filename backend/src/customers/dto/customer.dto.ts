export class CreateCustomerDTO {
    readonly name: string;
    readonly email: string;
    readonly adress: string;
    readonly document: string;
    readonly isActive: boolean;
    readonly imageURL?: string;
    readonly birthDate?: Date;
    readonly createdAt: Date;
}