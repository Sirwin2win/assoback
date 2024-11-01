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

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
//   @MinLength(5)
  @ApiProperty()
  city: string;



}

