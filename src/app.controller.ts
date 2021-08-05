import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post('/:name')
  public async setKeys(
    @Param('name') name: string,
    @Body('keys') keys: string,
  ): Promise<void> {
    return await this.appService.setKeys(name, keys);
  }

  @Get('/:name')
  public async getKeys(@Param('name') name): Promise<string> {
    return await this.appService.getKeys(name);
  }
}
