import { ContributionsService } from './contributions.service';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class ContributionsController {
    private readonly contributionsService;
    constructor(contributionsService: ContributionsService);
    create(body: any, image: any, req: any): Promise<{
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
}
