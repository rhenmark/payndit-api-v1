import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthToken, UserProfile } from './models/auth.models';
import { Public } from './constants';
import { SignInForm } from './dto/auth.input';
import { Context } from 'vm';

@Resolver()
export class AuthResolver {
  constructor(private auth: AuthService) {}

  @Mutation((returns) => AuthToken)
  @Public()
  async signIn(@Args('form') form: SignInForm): Promise<AuthToken> {
    return this.auth.signIn(form.email, form.password);
  }

  @Mutation((returns) => AuthToken)
  @Public()
  async register(@Args('form') form: SignInForm): Promise<AuthToken> {
    return this.auth.register(form.email, form.password);
  }

  @Query(() => UserProfile)
  profile(parent, args, ctx: Context): UserProfile {
    console.log('req ==>', ctx.req.user);
    return ctx.req.user;
  }
}
