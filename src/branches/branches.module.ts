import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
//
@Module({
  controllers: [BranchesController],
  providers: [PrismaService,BranchesService],
  imports: [PrismaModule],
  exports : [BranchesService]
})
export class BranchesModule {}
