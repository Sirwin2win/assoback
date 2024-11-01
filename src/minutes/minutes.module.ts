import { Module } from '@nestjs/common';
import { MinutesService } from './minutes.service';
import { MinutesController } from './minutes.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MinutesController],
  providers: [ PrismaService ,MinutesService],
  imports: [PrismaModule],
  exports : [MinutesService]
})
export class MinutesModule {}
