"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicCronService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
let DynamicCronService = class DynamicCronService {
    constructor(httpService, schedulerRegistry) {
        this.httpService = httpService;
        this.schedulerRegistry = schedulerRegistry;
    }
    addCronJob(name, seconds) {
        const job = new cron_1.CronJob(`*/5 * * * * *`, () => {
            console.log(`time (${seconds}) for job ${name} to run!`);
        });
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        console.log(`job ${name} added for each minute at ${seconds} seconds!`);
        return name;
    }
    deleteCronJob(name) {
        return this.schedulerRegistry.deleteCronJob(name);
    }
    getCrons() {
        const jobs = this.schedulerRegistry.getCronJobs();
        jobs.forEach((value, key, map) => {
            let next;
            try {
                next = value.nextDates().toDate();
            }
            catch (e) {
                console.log(e);
                next = 'error: next fire date is in the past!';
            }
            console.log(`job: ${key} -> next: ${next}`);
        });
        console.log(jobs);
        return jobs;
    }
    addInterval(name, milliseconds) {
        const callback = () => {
            console.warn(`Interval ${name} executing at time (${milliseconds})!`);
        };
        const interval = setInterval(callback, milliseconds);
        this.schedulerRegistry.addInterval(name, interval);
    }
    deleteInterval(name) {
        this.schedulerRegistry.deleteInterval(name);
        console.log(`Interval ${name} deleted!`);
    }
    getIntervals() {
        const intervals = this.schedulerRegistry.getIntervals();
        intervals.forEach((key) => console.log(`Interval: ${key}`));
    }
    addTimeout(name, milliseconds) {
        const callback = () => {
            console.log(`Timeout ${name} executing after (${milliseconds})!`);
        };
        const timeout = setTimeout(callback, milliseconds);
        this.schedulerRegistry.addTimeout(name, timeout);
    }
    deleteTimeout(name) {
        this.schedulerRegistry.deleteTimeout(name);
        console.log(`Timeout ${name} deleted!`);
    }
    getTimeouts() {
        const timeouts = this.schedulerRegistry.getTimeouts();
        timeouts.forEach((key) => console.log(`Timeout: ${key}`));
    }
};
DynamicCronService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        schedule_1.SchedulerRegistry])
], DynamicCronService);
exports.DynamicCronService = DynamicCronService;
//# sourceMappingURL=dynamic.cron.service.js.map