import { DynamicCronService } from './dynamic.cron.service';
export declare class DynamicCronController {
    private readonly dynamicCronService;
    constructor(dynamicCronService: DynamicCronService);
    list(): Promise<Map<string, any>>;
    add(): Promise<{
        code: number;
        message: string;
    }>;
    delete(): Promise<void>;
}
