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
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import { diskStorage } from 'multer';
import path = require('path');
import { ApiCreatedResponse,ApiOkResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { ContributionsService } from './contributions.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';





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




@Controller('contributions')
@ApiTags('contributions')
export class ContributionsController {
  constructor(private readonly contributionsService: ContributionsService) {}
  // @UseGuards(JwtAuthGuard)
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
      description: body.description,
      fullName: body.fullName,
      userId:Number(body.userId),
      branchId: Number(body.branchId),
      image:image.filename
    }
     return await this.contributionsService.create(details);
  }
  
  
  
     // Get request
     @Get()
     findAll() {
     
       return this.contributionsService.findAll();
     }
  
}
