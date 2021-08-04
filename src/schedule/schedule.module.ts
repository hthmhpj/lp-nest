import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WxNotice } from './wx.notice.service';

@Module({
  imports: [HttpModule],
  providers: [WxNotice],
})
export class ScheduleModule {}
