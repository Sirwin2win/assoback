import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<{
        id: number;
        status: string | null;
        fullName: string | null;
        createdAt: Date;
        userId: number | null;
        branchId: number | null;
    }>;
    findAll(): Promise<({} & {
        id: number;
        status: string | null;
        fullName: string | null;
        createdAt: Date;
        userId: number | null;
        branchId: number | null;
    })[]>;
    find(id: number): Promise<{
        id: number;
        status: string | null;
        fullName: string | null;
        createdAt: Date;
        userId: number | null;
        branchId: number | null;
    }[]>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__AttendanceClient<{
        id: number;
        status: string | null;
        fullName: string | null;
        createdAt: Date;
        userId: number | null;
        branchId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
