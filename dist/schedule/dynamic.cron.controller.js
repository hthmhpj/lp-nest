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
exports.DynamicCronController = void 0;
const common_1 = require("@nestjs/common");
const dynamic_cron_service_1 = require("./dynamic.cron.service");
let DynamicCronController = class DynamicCronController {
    constructor(dynamicCronService) {
        this.dynamicCronService = dynamicCronService;
    }
    async list() {
        return this.dynamicCronService.getCrons();
    }
    async add() {
        this.dynamicCronService.addCronJob('add', '5');
        return { code: 0, message: '成功' };
    }
    async delete() {
        return this.dynamicCronService.deleteCronJob('add');
    }
};
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DynamicCronController.prototype, "list", null);
__decorate([
    common_1.Get('add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DynamicCronController.prototype, "add", null);
__decorate([
    common_1.Get('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DynamicCronController.prototype, "delete", null);
DynamicCronController = __decorate([
    common_1.Controller('cron'),
    __metadata("design:paramtypes", [dynamic_cron_service_1.DynamicCronService])
], DynamicCronController);
exports.DynamicCronController = DynamicCronController;
//# sourceMappingURL=dynamic.cron.controller.js.map