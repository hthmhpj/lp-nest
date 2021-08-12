import { Controller, Get } from '@nestjs/common';
import { DynamicCronService } from './dynamic.cron.service';

@Controller('cron')
export class DynamicCronController {
  constructor(private readonly dynamicCronService: DynamicCronService) {}

  @Get('list')
  async list() {
    return this.dynamicCronService.getCrons();
  }
  @Get('add')
  async add() {
    
    this.dynamicCronService.addCronJob('add', '5');
    return { code: 0, message: '成功' };
  }

  @Get('delete')
  async delete() {
    return this.dynamicCronService.deleteCronJob('add');
  }
}
