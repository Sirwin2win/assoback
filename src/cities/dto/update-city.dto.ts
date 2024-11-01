import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateCityDto } from './create-city.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCityDto extends PartialType(CreateCityDto) {}
