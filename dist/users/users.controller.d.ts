import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findMany(branch: string): Promise<({
        branch: {
            cityId: number | null;
            branch: string;
            id: number;
        };
    } & {
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
    })[]>;
    findAll(): Promise<UserEntity[]>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    remove(id: number): Promise<UserEntity>;
}
