import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AttendanceService {
    constructor(private prisma: PrismaService) {}

    // Create new Branch
    async  create(createAttendanceDto: CreateAttendanceDto) {
        return this.prisma.attendance.create({
             data: createAttendanceDto
            });
      }

// Get All Branches on the site
      async  findAll() {
        return this.prisma.attendance.findMany({
          
        });
      }


    //   async findMany(branch:string) {
    //     return this.prisma.branch.findMany({ 
    //       where:{
    //         branch,},
    // include:{
    //   Complaint:{
    //     select:{
    //       id:true,
    //       title:true,
    //       description:true
    //     }
    //   },
    //   Contribution:{
    //     select:{
    //       id:true,
    //       title:true,
    //       description:true,
    //       image:true
    //     }
    //   },
    //   Minute:{
    //     select:{
    //       id:true,
    //       agenda:true,
    //       image:true
    //     }
    //   },
    //   User:{
    //     select:{
    //       id:true,
    //       firstName:true,
    //       lastName:true,
    //       phone:true
    //     }
    //   }

    // }
    
    //       });
    //   }




      async find(id:number){
        return this.prisma.attendance.findMany({ 
          where:{
            id,},
            
          });
      } 
    
// Delete Branch
      delete(id: number) {
            return this.prisma.branch.delete({ where: { id } });
          }

}
