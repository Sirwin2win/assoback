import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CitiesController],
  providers: [PrismaService,CitiesService],
  imports: [PrismaModule],
  exports : [CitiesService]
})
export class CitiesModule {}
