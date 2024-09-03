import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/constants';

// REST approach
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get("get-hello")
  getHello(): Record<any, any> {
    return this.appService.getHello();
  }
}
``