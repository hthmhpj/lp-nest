import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class WxNotice {
  constructor(private httpService: HttpService) {}

  @Cron('0 40 9 * * 1-5')
  async 日报() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '日报',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
  @Cron('0 0 18 * * 1-5')
  async 周报() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '周报',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
  @Cron(CronExpression.EVERY_30_MINUTES)
  async EVERY_30_MINUTES() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: 'EVERY_30_MINUTES',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
}
