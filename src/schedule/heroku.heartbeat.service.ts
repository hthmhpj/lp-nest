import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class HerokuHeartBeat {
  constructor(private httpService: HttpService) {}

  // @Cron(CronExpression.EVERY_10_MINUTES)
  // async EVERY_10_MINUTES() {
  //   // 程序30分钟无活动会被heroku停止
  //   const res = await this.httpService.get('https://cnodejs.org/api/v1/topics');
  //   res.subscribe(() => {
  //     console.log('HerokuHeartBeat');
  //   });
  // }
}
