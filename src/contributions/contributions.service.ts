import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';

@Injectable()
export class ContributionsService {
    constructor(private prisma: PrismaService) {}

    // Create Branch
    async  create(createContributionDto: CreateContributionDto) {
        return this.prisma.contribution.create({
             data: createContributionDto
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.contribution.findMany({
         
        });
      }

    
    
     async findMany() {
        return this.prisma.contribution.findMany({ 
    
          });
      }

// Delete City
      delete(id: number) {
            return this.prisma.contribution.delete({ where: { id } });
          }
    
}
