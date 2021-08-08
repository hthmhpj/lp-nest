import { HttpService } from '@nestjs/axios';
export declare class WxNotice {
    private httpService;
    constructor(httpService: HttpService);
    dailyNotice(): Promise<void>;
    weeklyNotice(): Promise<void>;
    MONDAY_TO_FRIDAY_AT_09_30AM(): Promise<void>;
    EVERY_HOUR(): Promise<void>;
    EVERY_DAY_AT_10PM(): Promise<void>;
}
