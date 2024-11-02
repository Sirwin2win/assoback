import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: {
        userId: any;
    }): Promise<{
        email: string;
        password: string | null;
        occupation: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        village: string | null;
        role: string | null;
        status: string | null;
        createdAt: Date;
        cityId: number | null;
        branchId: number | null;
        id: number;
    }>;
}
export {};
