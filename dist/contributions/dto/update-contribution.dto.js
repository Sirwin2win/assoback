"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContributionDto = void 0;
const create_contribution_dto_1 = require("./create-contribution.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateContributionDto extends (0, swagger_1.PartialType)(create_contribution_dto_1.CreateContributionDto) {
}
exports.UpdateContributionDto = UpdateContributionDto;
//# sourceMappingURL=update-contribution.dto.js.map