import { AuthEntity } from './entity/auth.entity';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
export declare const roundsOfHashing = 10;
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(signUpDto: SignUpDto): Promise<{
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
    login(email: string, password: string): Promise<AuthEntity>;
}
