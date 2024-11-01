//src/auth/auth.service.ts
import { AuthEntity } from './entity/auth.entity';
import { PrismaService } from './../prisma/prisma.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypts from 'bcryptjs';
import { SignUpDto } from './dto/signUp.dto';
// import { CreateStoreDto } from 'src/stores/dto/create-store.dto';
import { EmailAuthDto } from './dto/email-auth.dto';
import {ChangePasswordDto} from './dto/change-password.dto'
// import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';
const { randomUUID } = require('crypto');

export const roundsOfHashing = 10;

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}


  async create(signUpDto: SignUpDto) {
    const hashedPassword = await bcrypts.hash(
      signUpDto.password,
      roundsOfHashing,
    );
// console.log(subdomain)
    signUpDto.password = hashedPassword;
    // const timestamp = randomUUID();
    return this.prisma.user.create({
      data: signUpDto,
    });
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = await bcrypts.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    id:user.id,
    firstName:user.firstName,
    lastName:user.lastName,
    email:user.email,
    village:user.village,
    occupation:user.occupation,
    phone:user.phone,
    branchId:user.branchId
    }


  }


  // async changePassword(userId, oldPassword: string, newPassword: string) { 
    //Find the user
    // const user = await this.prisma.user.findUnique(userId);
    // if (!user) {
    //   throw new NotFoundException('User not found...');
    // }

    //Compare the old password with the password in DB
    // const passwordMatch = await bcrypts.compare(oldPassword, user.password);
    // if (!passwordMatch) {
    //   throw new UnauthorizedException('Wrong credentials');
    // }

    //Change user's password
    // const newHashedPassword = await bcrypts.hash(newPassword, 10);
    // user.password = newHashedPassword;
    // let data = {
    //   userId,
    //   oldPassword,
    //   newPassword: newHashedPassword,
    // }
    // await this.prisma.user.create();
    // await user.save();
  }



  /***************** Fotgot Password  */
// async sendResetMail(toemail: string , token : string) {
    
//   const mail = await this.mailService.sendMail({
//     to: toemail,
//       from:"azerq2023@outlook.fr",
//       subject: "Reset Password",
//       html:"<h1>Reset Password</h1> <h2>Welcome</h2><p>To reset your password, please click on this link</p><a href=http://localhost:3000/auth/resetpassword/"
//       +token+">Click this </a>"
     
      
      
//   });
//   if (mail){
//     return {message:"mail sent successfuly"} ; 
//   }
//   else {
//     return {message : "an error occurred while sending mail" } ; 
//   }
// }

// async forgot(emailDto: EmailAuthDto){
//   const fondUser=await this.prisma.user.findUnique({where: {email : emailDto.email}})
  
//   if (!fondUser){
//     throw new BadRequestException('Invalid mail');
//   }
//   const token =  await this.generateToken(fondUser);
//   return await this.sendResetMail(emailDto.email,token);
// }

// async resetPassword(token : string ,resetPassword: ResetPasswordDto) {
//   const decodedToken = await this.jwtService.verifyAsync(token);
//     console.log(decodedToken);

//     const userId = decodedToken.userId;
//   const foundUser = await this.prisma.user.findFirst({ where: { id: userId } });
//   if (!foundUser) {
//     return {message : "User does not exist" };
//   }

//   const hashedPassword = await this.hashPassword(resetPassword.password);

//   const passwordReset = await this.prisma.user.update({
//     where: {
//       id: foundUser.id,
//     },
//     data: {
//       password: hashedPassword,
//     }
//   });
 
//   if (!passwordReset) {
//     return { message: "Error" };
//   }
//   return { message: "Your Password Has been Reset Successfully" };
// }



