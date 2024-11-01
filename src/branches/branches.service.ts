import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class BranchesService {
    constructor(private prisma: PrismaService) {}

    // Create Branch
    async  create(createBranchDto: CreateBranchDto) {
        return this.prisma.branch.create({
             data: createBranchDto
            });
      }

// Get All Branches
      async  findAll() {
        return this.prisma.branch.findMany({
          include:{
            city:{
                  
            }
          }
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
        return this.prisma.branch.findMany({ 
          where:{
            id,},
            include:{
              Complaint:{
                select:{
                  id:true,
                  title:true,
                  description:true,
                  fullName:true,
                  createdAt:true
                }
              },
              Contribution:{
                select:{
                  id:true,
                  title:true,
                  description:true,
                  image:true,
                  fullName:true,
                  createdAt:true
                }
              },
              Minute:{
                select:{
                  id:true,
                  agenda:true,
                  image:true,
                  fullName:true,
                  createdAt:true
                }
              },
              User:{
                select:{
                  id:true,
                  firstName:true,
                  lastName:true,
                  phone:true,
                  occupation:true
                }
              },
              Attendance:{
                select:{
                  fullName:true,
                  status:true,
                  createdAt:true,
                  userId:true,
                  branchId:true
                }
              }
        
            }
    
          });
      }


    
    
    
// Delete Branch
      delete(id: number) {
            return this.prisma.branch.delete({ where: { id } });
          }
    
}
