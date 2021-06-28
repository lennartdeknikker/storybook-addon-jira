"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nanoMarkdown = _interopRequireDefault(require("nano-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseAtlassianDocFormatToHtml = function parseAtlassianDocFormatToHtml(AdfString) {
  return (0, _nanoMarkdown["default"])(AdfString.replace(/]/g, ')').replace(/\|/g, ']('));
};

var _default = parseAtlassianDocFormatToHtml;
exports["default"] = _default;