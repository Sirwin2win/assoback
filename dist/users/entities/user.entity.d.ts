import { User } from '@prisma/client';
export declare class UserEntity implements User {
    constructor(partial: Partial<UserEntity>);
    id: number;
    firstName: string;
    lastName: string;
    cityId: number;
    village: string;
    phone: string;
    occupation: string;
    email: string;
    password: string;
    role: string;
    status: string;
    createdAt: Date;
    branchId: number;
}
