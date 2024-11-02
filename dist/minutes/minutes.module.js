"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinutesModule = void 0;
const common_1 = require("@nestjs/common");
const minutes_service_1 = require("./minutes.service");
const minutes_controller_1 = require("./minutes.controller");
const prisma_service_1 = require("../prisma.service");
const prisma_module_1 = require("../prisma/prisma.module");
let MinutesModule = class MinutesModule {
};
exports.MinutesModule = MinutesModule;
exports.MinutesModule = MinutesModule = __decorate([
    (0, common_1.Module)({
        controllers: [minutes_controller_1.MinutesController],
        providers: [prisma_service_1.PrismaService, minutes_service_1.MinutesService],
        imports: [prisma_module_1.PrismaModule],
        exports: [minutes_service_1.MinutesService]
    })
], MinutesModule);
//# sourceMappingURL=minutes.module.js.map