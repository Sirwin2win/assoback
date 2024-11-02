import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
export declare class ComplaintsController {
    private readonly complaintsService;
    constructor(complaintsService: ComplaintsService);
    create(createComplaintDto: CreateComplaintDto): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
    }>;
    findAll(): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
    }[]>;
    update(id: number, updateComplaintDto: UpdateComplaintDto): Promise<{
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
    delete(id: number): import(".prisma/client").Prisma.Prisma__ComplaintClient<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
