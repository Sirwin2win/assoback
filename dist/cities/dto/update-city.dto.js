"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCityDto = void 0;
const create_city_dto_1 = require("./create-city.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateCityDto extends (0, swagger_1.PartialType)(create_city_dto_1.CreateCityDto) {
}
exports.UpdateCityDto = UpdateCityDto;
//# sourceMappingURL=update-city.dto.js.map