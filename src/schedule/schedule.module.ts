import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DynamicCronController } from './dynamic.cron.controller';
import { DynamicCronService } from './dynamic.cron.service';
import { HerokuHeartBeat } from './heroku.heartbeat.service';
import { WxNotice } from './wx.notice.service';

@Module({
  imports: [HttpModule],
  providers: [DynamicCronService, HerokuHeartBeat, WxNotice],
  controllers: [DynamicCronController],
})
export class ScheduleModule {}
