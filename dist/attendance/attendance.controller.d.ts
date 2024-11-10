import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<{
        status: string | null;
        createdAt: Date;
        branchId: number | null;
        id: number;
        userId: number | null;
        fullName: string | null;
    }>;
    findMany(id: number): Promise<{
        status: string | null;
        createdAt: Date;
        branchId: number | null;
        id: number;
        userId: number | null;
        fullName: string | null;
    }[]>;
    findAll(): Promise<{
        status: string | null;
        createdAt: Date;
        branchId: number | null;
        id: number;
        userId: number | null;
        fullName: string | null;
    }[]>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__BranchClient<{
        cityId: number | null;
        branch: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
