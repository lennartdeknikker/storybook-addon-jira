"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseCamelCaseToString = function parseCamelCaseToString(string) {
  var withSpaces = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  var lowerCased = withSpaces.toLowerCase();
  var withFirstLetterCapitalized = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  return withFirstLetterCapitalized;
};

var _default = parseCamelCaseToString;
exports["default"] = _default;