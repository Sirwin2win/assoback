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

export class CreateBranchDto {
  @IsString()
  @IsNotEmpty()
//   @MinLength(5)
  @ApiProperty()
  branch: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  cityId: number;


}

