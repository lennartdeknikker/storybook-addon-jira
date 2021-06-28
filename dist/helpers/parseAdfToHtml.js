"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nanoMarkdown = _interopRequireDefault(require("nano-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseAdfToHtml = function parseAdfToHtml(AdfString) {
  var withParsedLinks = AdfString.replace(/]/g, ')').replace(/\|/g, '](');
  return (0, _nanoMarkdown["default"])(withParsedLinks);
};

var _default = parseAdfToHtml;
exports["default"] = _default;