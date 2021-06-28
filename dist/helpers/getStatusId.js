"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseCamelCase = require("./parseCamelCase");

var getStatusId = function getStatusId(subTask) {
  return (0, _parseCamelCase.parseToCamelCase)(subTask.fields.status.name);
};

var _default = getStatusId;
exports["default"] = _default;