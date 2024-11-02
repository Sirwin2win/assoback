import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
export declare class BranchesController {
    private readonly branchesService;
    constructor(branchesService: BranchesService);
    create(createBranchDto: CreateBranchDto): Promise<{
        cityId: number | null;
        branch: string;
        id: number;
    }>;
    findMany(id: number): Promise<({
        Complaint: {
            createdAt: Date;
            id: number;
            description: string;
            title: string;
            fullName: string;
        }[];
        Contribution: {
            createdAt: Date;
            id: number;
            description: string;
            title: string;
            fullName: string;
            image: string;
        }[];
        Minute: {
            createdAt: Date;
            id: number;
            fullName: string;
            image: string;
            agenda: string;
        }[];
        Attendance: {
            status: string;
            createdAt: Date;
            branchId: number;
            userId: number;
            fullName: string;
        }[];
        User: {
            occupation: string;
            firstName: string;
            lastName: string;
            phone: string;
            id: number;
        }[];
    } & {
        cityId: number | null;
        branch: string;
        id: number;
    })[]>;
    findAll(): Promise<({
        city: {
            city: string;
            id: number;
        };
    } & {
        cityId: number | null;
        branch: string;
        id: number;
    })[]>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__BranchClient<{
        cityId: number | null;
        branch: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
