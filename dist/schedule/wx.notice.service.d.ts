import { HttpService } from '@nestjs/axios';
export declare class WxNotice {
    private httpService;
    constructor(httpService: HttpService);
    日报(): Promise<void>;
    周报(): Promise<void>;
    EVERY_30_MINUTES(): Promise<void>;
}
