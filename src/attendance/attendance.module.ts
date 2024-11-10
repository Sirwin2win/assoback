import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [AttendanceController],
  providers: [PrismaService,AttendanceService],
  imports: [PrismaModule],
  exports : [AttendanceService]
})
export class AttendanceModule {}
