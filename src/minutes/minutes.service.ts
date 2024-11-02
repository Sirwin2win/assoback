import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMinuteDto } from './dto/create-minute.dto';

@Injectable()
export class MinutesService {
    constructor(private prisma: PrismaService) {}

    // Create Branch
    async  create(createMinuteDto: CreateMinuteDto) {
        return this.prisma.minute.create({
             data: createMinuteDto
            // data:{
            //       address:createMinuteDto.address,
            //       state:createBranchDto.state,
            //       branch:createBranchDto.branch,
            //       userId:createBranchDto.userId
            // }
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.minute.findMany();
      }

    //   // @Get Products By StoreId
    //   async findMany(subdomain: string) {
    //     return this.prisma.product.findMany({ 
    //       where: { 
    //    store:{
    //     is:{
    //       subdomain:subdomain
    //     },
      
    //    }
    //       }
    //       });
    //   }
    
    //  async findMany(minute: string) {
    //     return this.prisma.minute.findMany({ 
    //  where:{
    //     minute
    //  }
    //       });
    //   }
}
