//src/auth/auth.controller.ts

import { Body, Controller,Put , Post,Get, UseGuards, Req, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { StoresService } from 'src/stores/stores.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypts from 'bcryptjs';
import { ChangePasswordDto } from './dto/change-password.dto';
// import { CreateStoreDto } from 'src/stores/dto/create-store.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOkResponse({type : SignUpDto}) 
  signup(@Body() body: SignUpDto, @Request() req){
    // console.log(SignUpDto.storeName)
    // let a; 
    // const slugify = str =>
    //   str
    //     .toLowerCase()
    //     .trim()
    //     .replace(/[^\w\s-]/g, '')
    //     .replace(/[\s_-]+/g, '-')
    //     .replace(/^-+|-+$/g, '');
  
    //    body.subdomain = slugify(body.storeName)

        let details = {
          password:body.password,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          occupation: body.occupation,
          phone: body.phone,
          cityId: body.cityId,
        branchId: body.branchId,
          village: body.village,
        }

        
        // timestamp.toLocalString()

        // let storeDetails = {
        //   userId:req.user.id,
        //   generatedId:timestamp,
        //   photo:null,
        //   logo:null,
        //   banner:null,
        //   headerImage:null,
        //   storeName:null,
        //   subdomain:null,
        //   twitter:null,
        //   facebook:null,
        //   instagram:null
        // }

    return this.authService.create(details)
    // return this.storesService.create(storeDetails)
  }

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Get('logout')
 logout(@Request() req){
  const roundsOfHashing = 10;
  const hashedVariable = bcrypts.hash(
    req.user,
    roundsOfHashing,
  );
  req.token = req.token+hashedVariable
  return 'User seems to be logged out'
 }

//  @UseGuards(AuthGuard)
//   @Put('change-password')
//   async changePassword(
//     @Body() changePasswordDto: ChangePasswordDto,
//     @Req() req,
//   ) {
//     return this.authService.changePassword(
//       req.userId,
//       changePasswordDto.oldPassword,
//       changePasswordDto.newPassword,
//     );
//   }


}