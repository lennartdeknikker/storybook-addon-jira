"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseToCamelCase = _interopRequireDefault(require("./parseToCamelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getStatusKey = function getStatusKey(subTask) {
  return (0, _parseToCamelCase["default"])(subTask.fields.status.name.toLowerCase());
};

var _default = getStatusKey;
exports["default"] = _default;