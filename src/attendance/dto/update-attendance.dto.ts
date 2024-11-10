import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateAttendanceDto } from './create-attendance.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {}
