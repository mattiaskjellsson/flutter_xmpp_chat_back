import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { KeysDTO } from './keys.dto';

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
    @Body('keys') body: KeysDTO,
  ): Promise<void> {
    console.log(`Body of post: ${body}`);
    return await this.appService.setKeys(name, body);
  }

  @Get('/:name')
  public async getKeys(@Param('name') name): Promise<KeysDTO> {
    return await this.appService.getKeys(name);
  }
}
