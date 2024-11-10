import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BranchesModule } from './branches/branches.module';
// import { ComplaintsModule } from './complaints/complaints.module';
// import { MinutesModule } from './minutes/minutes.module';
// import { ContributionsModule } from './contributions/contributions.module';
import { CitiesModule } from './cities/cities.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { ContributionsModule } from './contributions/contributions.module';
import { MinutesModule } from './minutes/minutes.module';
import { AttendanceModule } from './attendance/attendance.module';


@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, BranchesModule, CitiesModule, ComplaintsModule, ContributionsModule, MinutesModule, AttendanceModule,],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}
