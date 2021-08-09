import { HttpService } from '@nestjs/axios';
export declare class HerokuHeartBeat {
    private httpService;
    constructor(httpService: HttpService);
}
