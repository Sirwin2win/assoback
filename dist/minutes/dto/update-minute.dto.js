"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMinuteDto = void 0;
const create_minute_dto_1 = require("./create-minute.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateMinuteDto extends (0, swagger_1.PartialType)(create_minute_dto_1.CreateMinuteDto) {
}
exports.UpdateMinuteDto = UpdateMinuteDto;
//# sourceMappingURL=update-minute.dto.js.map