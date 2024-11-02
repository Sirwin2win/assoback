import { PrismaService } from '../prisma/prisma.service';
import { CreateMinuteDto } from './dto/create-minute.dto';
export declare class MinutesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMinuteDto: CreateMinuteDto): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
        agenda: string | null;
    }>;
    findAll(): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
        agenda: string | null;
    }[]>;
}
