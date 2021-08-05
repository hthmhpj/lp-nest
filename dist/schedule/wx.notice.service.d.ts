import { HttpService } from '@nestjs/axios';
export declare class WxNotice {
    private httpService;
    constructor(httpService: HttpService);
    dailyNotice(): Promise<void>;
    weeklyNotice(): Promise<void>;
    下午两点(): Promise<void>;
}
