import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsController } from './complaints.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ComplaintsController],
  providers: [PrismaService,ComplaintsService],
  imports:[PrismaModule],
  exports:[ComplaintsService],
})
export class ComplaintsModule {}
