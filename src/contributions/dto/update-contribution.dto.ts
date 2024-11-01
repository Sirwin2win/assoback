import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreateContributionDto } from './create-contribution.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateContributionDto extends PartialType(CreateContributionDto) {}
