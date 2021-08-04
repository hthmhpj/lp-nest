import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class WxNotice {
  constructor(private httpService: HttpService) {}

  @Cron("0 40 09 * * 1-5")
  async weeklyNotice() {
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
}
