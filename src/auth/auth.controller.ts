import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('v1/login')
  signIn(@Body() signInDTO: Record<string, any>) {
    return this.authService.signIn(signInDTO.username, signInDTO.password);
  }

  @UseGuards(AuthGuard)
  @Get('v1/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
