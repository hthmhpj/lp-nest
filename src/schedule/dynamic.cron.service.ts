import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class DynamicCronService {
  constructor(
    private httpService: HttpService,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`*/5 * * * * *`, () => {
      console.log(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    console.log(`job ${name} added for each minute at ${seconds} seconds!`);
    return name;
  }
  deleteCronJob(name: string) {
    return this.schedulerRegistry.deleteCronJob(name);
  }
  getCrons() {
    const jobs = this.schedulerRegistry.getCronJobs();
    jobs.forEach((value, key, map) => {
      let next;
      try {
        next = value.nextDates().toDate();
      } catch (e) {
        console.log(e)
        next = 'error: next fire date is in the past!';
      }
      console.log(`job: ${key} -> next: ${next}`);
    });
    console.log(jobs)
    return jobs;
  }

  addInterval(name: string, milliseconds: number) {
    const callback = () => {
      console.warn(`Interval ${name} executing at time (${milliseconds})!`);
    };

    const interval = setInterval(callback, milliseconds);
    this.schedulerRegistry.addInterval(name, interval);
  }
  deleteInterval(name: string) {
    this.schedulerRegistry.deleteInterval(name);
    console.log(`Interval ${name} deleted!`);
  }
  getIntervals() {
    const intervals = this.schedulerRegistry.getIntervals();
    intervals.forEach((key) => console.log(`Interval: ${key}`));
  }

  addTimeout(name: string, milliseconds: number) {
    const callback = () => {
      console.log(`Timeout ${name} executing after (${milliseconds})!`);
    };

    const timeout = setTimeout(callback, milliseconds);
    this.schedulerRegistry.addTimeout(name, timeout);
  }
  deleteTimeout(name: string) {
    this.schedulerRegistry.deleteTimeout(name);
    console.log(`Timeout ${name} deleted!`);
  }
  getTimeouts() {
    const timeouts = this.schedulerRegistry.getTimeouts();
    timeouts.forEach((key) => console.log(`Timeout: ${key}`));
  }
}
