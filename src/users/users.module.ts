import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { authExtProvider } from 'src/auth/auth-ext';

@Module({
  providers: [UsersService, authExtProvider],
  exports: [UsersService],
})
export class UsersModule {}
