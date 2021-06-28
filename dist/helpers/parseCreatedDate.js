"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseCreatedDate = function parseCreatedDate(date) {
  var dateObject = new Date(date);
  var year = dateObject.getFullYear();
  var month = dateObject.toLocaleString('default', {
    month: 'long'
  });
  var day = dateObject.getDate();
  var daySuffix = 'th';
  var dayLastDigit = Number(Array.from(String(day)).pop());
  if (dayLastDigit === 3) daySuffix = 'rd';
  if (dayLastDigit === 2) daySuffix = 'nd';
  if (dayLastDigit === 1) daySuffix = 'st';
  if (day === 13) daySuffix = 'th';
  if (day === 12) daySuffix = 'th';
  if (day === 11) daySuffix = 'th';
  return " ".concat(month, " ").concat(day).concat(daySuffix, ", ").concat(year);
};

var _default = parseCreatedDate;
exports["default"] = _default;