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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const is_public_api_decorator_1 = require("@core/decorators/is-public-api.decorator");
const request_user_decorator_1 = require("@core/decorators/request-user.decorator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const article_service_1 = require("./article.service");
const article_create_dto_1 = require("./dto/article-create.dto");
const article_query_dto_1 = require("./dto/article-query.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async list(dto) {
        const list = await this.articleService.list(dto);
        return list;
    }
    async detail(id) {
        return await this.articleService.findOne(id);
    }
    async create(dto, req) {
        return await this.articleService.create(dto);
    }
    async update() {
        return 'update';
    }
    async delete(id) {
        return await this.articleService.delete(id);
    }
};
__decorate([
    common_1.Get('list'),
    is_public_api_decorator_1.IsPublicApi(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof article_query_dto_1.ArticleQueryDTO !== "undefined" && article_query_dto_1.ArticleQueryDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "list", null);
__decorate([
    common_1.Get('/:id'),
    is_public_api_decorator_1.IsPublicApi(),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "detail", null);
__decorate([
    common_1.Post('create'),
    is_public_api_decorator_1.IsPublicApi(),
    __param(0, request_user_decorator_1.RequestUser('authorId')),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof article_create_dto_1.ArticleCreateDTO !== "undefined" && article_create_dto_1.ArticleCreateDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    common_1.Put('update'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "delete", null);
ArticleController = __decorate([
    common_1.Controller('article'),
    swagger_1.ApiTags('article'),
    __metadata("design:paramtypes", [typeof (_c = typeof article_service_1.ArticleService !== "undefined" && article_service_1.ArticleService) === "function" ? _c : Object])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map