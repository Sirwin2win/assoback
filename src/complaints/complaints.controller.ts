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
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import { ApiCreatedResponse,ApiOkResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Controller('complaints')
@ApiTags('complaints')
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  // @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse()
  async create(@Body() createComplaintDto: CreateComplaintDto) {
    // return new UserEntity(await this.usersService.create(createUserDto));
    return await this.complaintsService.create(createComplaintDto);
  }


   // Get request
   @Get()
   findAll() {
   
     return this.complaintsService.findAll();
   }
   // Update Complaint
   @Patch(':id')
   @ApiCreatedResponse()
   async update(
     @Param('id', ParseIntPipe) id: number,
     @Body() updateComplaintDto: UpdateComplaintDto,
   ) {
     return this.complaintsService.update(+id,updateComplaintDto);
   }

   @Delete(':id')
   delete(@Param('id') id: number) {
     return this.complaintsService.delete(+id);
   }

}
