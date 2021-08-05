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
exports.WxNotice = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const schedule_1 = require("@nestjs/schedule");
let WxNotice = class WxNotice {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async dailyNotice() {
        const res = await this.httpService.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5', {
            msgtype: 'text',
            text: {
                content: '写日报',
                mentioned_list: ['@all'],
            },
        });
        res.subscribe(({ data }) => {
            console.log(data);
        });
    }
    async weeklyNotice() {
        const res = await this.httpService.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5', {
            msgtype: 'text',
            text: {
                content: '1点半',
                mentioned_list: ['@all'],
            },
        });
        res.subscribe(({ data }) => {
            console.log(data);
        });
    }
    async 下午两点() {
        const res = await this.httpService.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d495e6ea-b6dc-4e1c-9ee6-46729a2c12b5', {
            msgtype: 'text',
            text: {
                content: '下午两点',
                mentioned_list: ['@all'],
            },
        });
        res.subscribe(({ data }) => {
            console.log(data);
        });
    }
};
__decorate([
    schedule_1.Cron('0 40 11 * * 1-5'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WxNotice.prototype, "dailyNotice", null);
__decorate([
    schedule_1.Cron('0 30 13 * * 1-5'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WxNotice.prototype, "weeklyNotice", null);
__decorate([
    schedule_1.Cron('0 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WxNotice.prototype, "\u4E0B\u5348\u4E24\u70B9", null);
WxNotice = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WxNotice);
exports.WxNotice = WxNotice;
//# sourceMappingURL=wx.notice.service.js.map