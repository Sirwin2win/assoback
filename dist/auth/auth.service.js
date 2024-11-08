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
exports.AuthService = exports.roundsOfHashing = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypts = require("bcryptjs");
const { randomUUID } = require('crypto');
exports.roundsOfHashing = 10;
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async create(signUpDto) {
        const hashedPassword = await bcrypts.hash(signUpDto.password, exports.roundsOfHashing);
        signUpDto.password = hashedPassword;
        return this.prisma.user.create({
            data: signUpDto,
        });
    }
    async login(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException(`No user found for email: ${email}`);
        }
        const isPasswordValid = await bcrypts.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        return {
            accessToken: this.jwtService.sign({ userId: user.id }),
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            village: user.village,
            occupation: user.occupation,
            phone: user.phone,
            branchId: user.branchId
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map