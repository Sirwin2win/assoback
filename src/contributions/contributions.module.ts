import { Module } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { ContributionsController } from './contributions.controller';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ContributionsController],
  providers: [PrismaService,ContributionsService],
  imports:[PrismaModule],
  exports:[ContributionsService]
})
export class ContributionsModule {}
