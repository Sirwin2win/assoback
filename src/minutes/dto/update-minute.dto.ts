import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateMinuteDto } from './create-minute.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateMinuteDto extends PartialType(CreateMinuteDto) {}
