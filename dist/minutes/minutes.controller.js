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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinutesController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path = require("path");
const minutes_service_1 = require("./minutes.service");
const platform_express_1 = require("@nestjs/platform-express");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, cb) => {
            const start = Date.now();
            const filename = path.parse(file.originalname).name.replace(/\s/g, '') + start;
            const extension = path.parse(file.originalname).ext;
            const imgpath = `${filename}${extension}`;
            cb(null, `${filename}${extension}`);
        }
    })
};
let MinutesController = class MinutesController {
    constructor(minutesService) {
        this.minutesService = minutesService;
    }
    async create(body, image, req) {
        let details = {
            title: body.title,
            agenda: body.agenda,
            fullName: body.fullName,
            userId: req.user.id,
            branchId: req.user.branchId,
            image: image.filename
        };
        return await this.minutesService.create(details);
    }
    findAll() {
        return this.minutesService.findAll();
    }
};
exports.MinutesController = MinutesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', exports.storage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MinutesController.prototype, "findAll", null);
exports.MinutesController = MinutesController = __decorate([
    (0, common_1.Controller)('minutes'),
    (0, swagger_1.ApiTags)('minutes'),
    __metadata("design:paramtypes", [minutes_service_1.MinutesService])
], MinutesController);
//# sourceMappingURL=minutes.controller.js.map