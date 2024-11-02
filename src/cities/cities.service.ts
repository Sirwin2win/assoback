import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
    constructor(private prisma: PrismaService) {}

    // Create Branch
    async  create(createCityDto: CreateCityDto) {
        return this.prisma.city.create({
             data: createCityDto
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.city.findMany({
           include:{
            Branch:{
                  
            }
           }
        });
      }

    
    
     async findMany(city: string) {
        return this.prisma.city.findMany({ 
     where:{
        city
     }
          });
      }

// Delete City
      delete(id: number) {
            return this.prisma.city.delete({ where: { id } });
          }
    
}
