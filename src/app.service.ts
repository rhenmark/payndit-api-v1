import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Public } from './auth/constants';

@Injectable()
export class AppService {
  getHello(): Record<any, any> {
    return {
      data: []
    }
  }
  
}
