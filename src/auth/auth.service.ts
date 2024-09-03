import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthToken } from './models/auth.models';
import { SupabaseService } from './config/supabase.config';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private supabaseService: SupabaseService,
  ) {
    this.supabase = this.supabaseService.getClient();
  }

  async signIn(email: string, password: string): Promise<AuthToken> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!data.session) {
      throw new UnauthorizedException('Session not found');
    }

    return {
      access_token: data.session.access_token,
    };
  }

  async register(email: string, password: string): Promise<AuthToken> {
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
      // options: {
      //   emailRedirectTo: 'https://example.com/welcome',
      // },
    });

    if (error) {
      if (
        error.code === 'email_exists' ||
        error.code === 'user_already_exists'
      ) {
        throw new ConflictException('Failed to sign up');
      }
      throw new InternalServerErrorException('Failed to sign up');
    }

    return {
      access_token: data.session?.access_token,
    };
  }
}
