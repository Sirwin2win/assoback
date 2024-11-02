import { MinutesService } from './minutes.service';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class MinutesController {
    private readonly minutesService;
    constructor(minutesService: MinutesService);
    create(body: any, image: any, req: any): Promise<{
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
