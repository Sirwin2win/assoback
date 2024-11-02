import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: SignUpDto, req: any): Promise<{
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
    login({ email, password }: LoginDto): Promise<AuthEntity>;
    logout(req: any): string;
}
