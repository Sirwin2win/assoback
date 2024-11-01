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

export class CreateContributionDto {
  @IsNumber()
  @IsNotEmpty()
//   @MinLength(5)
  @ApiProperty()
  branchId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title:string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description:string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image:string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fullName:string

}

