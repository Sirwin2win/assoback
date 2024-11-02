import { PrismaService } from '../prisma/prisma.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
export declare class ContributionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContributionDto: CreateContributionDto): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
    }>;
    findAll(): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
    }[]>;
    findMany(): Promise<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
    }[]>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__ContributionClient<{
        createdAt: Date;
        branchId: number | null;
        id: number;
        description: string | null;
        userId: number | null;
        title: string | null;
        fullName: string | null;
        image: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
