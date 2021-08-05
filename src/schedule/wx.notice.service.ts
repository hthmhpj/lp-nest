import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class WxNotice {
  constructor(private httpService: HttpService) {}

  @Cron('0 0 11 * * 1-5')
  async dailyNotice() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '写日报',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }

  @Cron('0 10 11 * * 4')
  async weeklyNotice() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '写周报',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
}
