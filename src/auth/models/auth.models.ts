import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'auth', inheritDescription: true })
export class AuthToken {
  @Field((type) => ID)
  access_token: string;
}

@ObjectType({ description: 'user_profile' })
export class UserProfile {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  email: string;

  @Field((type) => Date)
  iat: Date;

  @Field((type) => Date)
  exp: Date;
}
