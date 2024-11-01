import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateBranchDto } from './create-branch.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {}
