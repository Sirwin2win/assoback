import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
   
    // @ApiProperty({ type: String })
    // _id: ObjectId;

  @ApiProperty()
  id: number;
  
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  cityId: number;

  @ApiProperty()
  village: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  occupation: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  status: string;
  

  @ApiProperty()
  createdAt: Date;


  @ApiProperty()
  branchId: number;

  // @Exclude()
  // password: string;
}