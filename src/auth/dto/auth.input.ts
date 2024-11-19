import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInForm {
  @Field()
  email: string;

  @Field()
  password: string;
}
