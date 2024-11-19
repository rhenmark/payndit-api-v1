import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

export const authExtProvider = {
  provide: APP_GUARD,
  useClass: AuthGuard,
};
