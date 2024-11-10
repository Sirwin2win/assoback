import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAttendanceDto {
  @IsString()
  @IsNotEmpty()
//   @MinLength(5)
  @ApiProperty()
  status: string;

  @IsString()
  @IsNotEmpty()
//   @MinLength(5)
  @ApiProperty()
  fullName: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  branchId: number;


}

