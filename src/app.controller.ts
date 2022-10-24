import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';

@UseGuards(AuthGuard)
@Controller("auth")
export class AppController {
  
  name: string = "Faizan";

  constructor(private appService: AppService) {}

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
