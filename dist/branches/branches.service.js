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
exports.BranchesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BranchesService = class BranchesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBranchDto) {
        return this.prisma.branch.create({
            data: createBranchDto
        });
    }
    async findAll() {
        return this.prisma.branch.findMany({
            include: {
                city: {}
            }
        });
    }
    async find(id) {
        return this.prisma.branch.findMany({
            where: {
                id,
            },
            include: {
                Complaint: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        fullName: true,
                        createdAt: true
                    }
                },
                Contribution: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        image: true,
                        fullName: true,
                        createdAt: true
                    }
                },
                Minute: {
                    select: {
                        id: true,
                        agenda: true,
                        image: true,
                        fullName: true,
                        createdAt: true
                    }
                },
                User: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        phone: true,
                        occupation: true
                    }
                },
                Attendance: {
                    select: {
                        fullName: true,
                        status: true,
                        createdAt: true,
                        userId: true,
                        branchId: true
                    }
                }
            }
        });
    }
    delete(id) {
        return this.prisma.branch.delete({ where: { id } });
    }
};
exports.BranchesService = BranchesService;
exports.BranchesService = BranchesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BranchesService);
//# sourceMappingURL=branches.service.js.map