import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateComplaintDto } from './create-complaint.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateComplaintDto extends PartialType(CreateComplaintDto) {}
