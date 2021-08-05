import { HttpService } from '@nestjs/axios';
export declare class WxNotice {
    private httpService;
    constructor(httpService: HttpService);
    dailyNotice(): Promise<void>;
    weeklyNotice(): Promise<void>;
}
