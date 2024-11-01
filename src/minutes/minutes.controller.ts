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
  UploadedFile,
  UseInterceptors,
 Request,
Response
} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import { ApiCreatedResponse,ApiOkResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { diskStorage } from 'multer';
import path = require('path');
import { UpdateMinuteDto } from './dto/update-minute.dto';
import { MinutesService } from './minutes.service';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';


//  Storage  destination & file structure
export const storage = {
  storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const start = Date.now();
          const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + start;
          const extension: string = path.parse(file.originalname).ext;
          const imgpath = `${filename}${extension}`
          cb(null, `${filename}${extension}`)
      }
  })

}

@Controller('minutes')
@ApiTags('minutes')
export class MinutesController {
  constructor(private readonly minutesService: MinutesService) {}


    @UseGuards(JwtAuthGuard)
@Post()
@ApiConsumes('multipart/form-data')
@UseInterceptors(FileInterceptor('image',storage)) 
public async create(
  @Body() body,
  @UploadedFile() image,
  @Request() req,
) {
  //  return await {body:body, file:file};
  let details = {
    title:body.title,
    agenda: body.agenda,
    fullName: body.fullName,
    userId:req.user.id,
    branchId: req.user.branchId,
    image:image.filename
  }
   return await this.minutesService.create(details);
}



   // Get request
   @Get()
   findAll() {
   
     return this.minutesService.findAll();
   }
}
