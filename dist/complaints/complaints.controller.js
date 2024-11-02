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
exports.ComplaintsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const complaints_service_1 = require("./complaints.service");
const create_complaint_dto_1 = require("./dto/create-complaint.dto");
const update_complaint_dto_1 = require("./dto/update-complaint.dto");
let ComplaintsController = class ComplaintsController {
    constructor(complaintsService) {
        this.complaintsService = complaintsService;
    }
    async create(createComplaintDto) {
        return await this.complaintsService.create(createComplaintDto);
    }
    findAll() {
        return this.complaintsService.findAll();
    }
    async update(id, updateComplaintDto) {
        return this.complaintsService.update(+id, updateComplaintDto);
    }
    delete(id) {
        return this.complaintsService.delete(+id);
    }
};
exports.ComplaintsController = ComplaintsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_complaint_dto_1.CreateComplaintDto]),
    __metadata("design:returntype", Promise)
], ComplaintsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_complaint_dto_1.UpdateComplaintDto]),
    __metadata("design:returntype", Promise)
], ComplaintsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "delete", null);
exports.ComplaintsController = ComplaintsController = __decorate([
    (0, common_1.Controller)('complaints'),
    (0, swagger_1.ApiTags)('complaints'),
    __metadata("design:paramtypes", [complaints_service_1.ComplaintsService])
], ComplaintsController);
//# sourceMappingURL=complaints.controller.js.map