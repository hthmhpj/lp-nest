import { Module } from '@nestjs/common';
import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [NestScheduleModule.forRoot(), ScheduleModule],
})
export class AppModule {}
