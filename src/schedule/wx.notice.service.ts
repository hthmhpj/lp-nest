import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class WxNotice {
  constructor(private httpService: HttpService) {}

  @Cron('0 40 9 * * 1-5')
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
  @Cron('0 00 18 * * 1-5')
  async dailyNotice2() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: 'xxx',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }

  @Cron('0 30 13 * * 1-5')
  async weeklyNotice() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '1点半',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_09_30AM)
  async MONDAY_TO_FRIDAY_AT_09_30AM() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: 'MONDAY_TO_FRIDAY_AT_09_30AM',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
  @Cron(CronExpression.EVERY_10_MINUTES)
  async EVERY_10_MINUTES() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: '10分钟一次，防止程序空闲被heroku停止',
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
  @Cron(CronExpression.EVERY_DAY_AT_10PM)
  async EVERY_DAY_AT_10PM() {
    const res = await this.httpService.post(
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5',
      {
        msgtype: 'text',
        text: {
          content: 'EVERY_DAY_AT_10PM',
          mentioned_list: ['@all'],
        },
      },
    );
    res.subscribe(({ data }) => {
      console.log(data);
    });
  }
}
