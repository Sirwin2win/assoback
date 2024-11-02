import { PrismaService } from '../prisma/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
export declare class CitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCityDto: CreateCityDto): Promise<{
        city: string;
        id: number;
    }>;
    findAll(): Promise<({
        Branch: {
            cityId: number | null;
            branch: string;
            id: number;
        }[];
    } & {
        city: string;
        id: number;
    })[]>;
    findMany(city: string): Promise<{
        city: string;
        id: number;
    }[]>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__CityClient<{
        city: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
