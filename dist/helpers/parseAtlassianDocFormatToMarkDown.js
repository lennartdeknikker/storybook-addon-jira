"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseAtlassianDocFormatToMarkDown = function parseAtlassianDocFormatToMarkDown(AdfString) {
  return AdfString.replace(/]/g, ')').replace(/\|/g, '](');
};

var _default = parseAtlassianDocFormatToMarkDown;
exports["default"] = _default;