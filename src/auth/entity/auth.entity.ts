// src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;
  id: number;
  firstName:string
  lastName:string
  email:string
  village:string
  occupation:string
  phone:string
  branchId:number
  // branch:string

}