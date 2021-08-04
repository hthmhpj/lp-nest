import { HttpService } from '@nestjs/axios';
export declare class WxNotice {
    private httpService;
    constructor(httpService: HttpService);
    weeklyNotice(): Promise<void>;
}
