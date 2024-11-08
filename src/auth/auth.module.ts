import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { StoresService } from 'src/stores/stores.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';


export const jwtSecret = process.env.JWTSECRET;

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1d' }, // e.g. 30s, 7d, 24h
    }),
    UsersModule,
   
  ],
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy],
})
export class AuthModule {}
