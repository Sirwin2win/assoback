import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';


@Injectable()
export class ComplaintsService {
    constructor(private prisma: PrismaService) {}

    // Create Complaint
    async  create(createComplaintDto: CreateComplaintDto) {
        return this.prisma.complaint.create({
             data: createComplaintDto
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.complaint.findMany({
         
        });
      }

    
    // Find Many
     async findMany(id:number) {
        return this.prisma.complaint.findMany({ 
    
          });
      }


      // Update Complaint
      async update(id: number, updateComplaintDto: UpdateComplaintDto) {
            return this.prisma.user.update({
              where: { id },
              data: updateComplaintDto,
            });
          }
        

// Delete City
      delete(id: number) {
            return this.prisma.complaint.delete({ where: { id } });
          }
   
}
