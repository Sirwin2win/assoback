import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
 Request,
Response
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import { ApiCreatedResponse,ApiOkResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
@ApiTags('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

   // @UseGuards(JwtAuthGuard)
   @Post()
   // @ApiConsumes('multipart/form-data')
   @ApiCreatedResponse()
   async create(@Body() createAttendanceDto: CreateAttendanceDto) {
     // return new UserEntity(await this.usersService.create(createUserDto));
     return await this.attendanceService.create(createAttendanceDto);
   }
 
 
   // @Get()
   // findMany(':id'){
   //  return this.branchesService.findMany()
   // }
 
 
    // @Get store based on user id
   //  @Get(':branch')
   //  findMany(@Param('branch') branch : string){
   //    return this.branchesService.findMany(branch)
   //  }
 
   
   // @Get store based on user id
   @Get(':id')
   findMany(@Param('id') id : number){ 
     return this.attendanceService.find(+id)
   }
 
 
 
    // Get request
    @Get()
    findAll() {
    
      return this.attendanceService.findAll();
    }
 
    
 
    @Delete(':id')
    delete(@Param('id') id: number) {
      return this.attendanceService.delete(+id);
    }
}










