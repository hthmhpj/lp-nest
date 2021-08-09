import { HttpService } from '@nestjs/axios';
import { SchedulerRegistry } from '@nestjs/schedule';
export declare class DynamicCronService {
    private httpService;
    private schedulerRegistry;
    constructor(httpService: HttpService, schedulerRegistry: SchedulerRegistry);
    addCronJob(name: string, seconds: string): string;
    deleteCronJob(name: string): void;
    getCrons(): Map<string, any>;
    addInterval(name: string, milliseconds: number): void;
    deleteInterval(name: string): void;
    getIntervals(): void;
    addTimeout(name: string, milliseconds: number): void;
    deleteTimeout(name: string): void;
    getTimeouts(): void;
}
