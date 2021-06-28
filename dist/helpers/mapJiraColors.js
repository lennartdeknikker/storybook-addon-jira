"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mapJiraColors = function mapJiraColors(color) {
  if (color === 'yellow') return '#0052cc';
  if (color === 'green') return '#36b37e';
  return '#ebecf0';
};

var _default = mapJiraColors;
exports["default"] = _default;