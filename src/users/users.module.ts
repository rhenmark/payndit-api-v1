import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { authExtProvider } from 'src/auth/auth-ext';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Module({
  providers: [UsersService, authExtProvider],
  exports: [UsersService],
})
export class UsersModule {}
