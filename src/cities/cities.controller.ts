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
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('cities')
@ApiTags('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}
  // @UseGuards(JwtAuthGuard)
  @Post()
  // @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse()
  async create(@Body() createCityDto: CreateCityDto) {
    // return new UserEntity(await this.usersService.create(createUserDto));
    return await this.citiesService.create(createCityDto);
  }


   // Get request
   @Get()
   findAll() {
   
     return this.citiesService.findAll();
   }

   @Delete(':id')
   delete(@Param('id') id: number) {
     return this.citiesService.delete(+id);
   }
}
