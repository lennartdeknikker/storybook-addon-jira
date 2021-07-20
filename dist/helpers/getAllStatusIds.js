"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseCamelCase = require("./parseCamelCase");

var getAllStatusIds = function getAllStatusIds(subtasksCategories, persistentCategories) {
  console.log('🚀 ~ subtasksCategories', subtasksCategories);
  console.log('🚀 ~ persistentCategories', persistentCategories);

  if (subtasksCategories && persistentCategories) {
    var labels = persistentCategories.map(function (category) {
      return (0, _parseCamelCase.parseToCamelCase)(category);
    });
    var newLabels = Object.keys(subtasksCategories);

    for (var _i = 0, _newLabels = newLabels; _i < _newLabels.length; _i++) {
      var newLabel = _newLabels[_i];
      if (!labels.includes(newLabel)) labels.push(newLabel);
    }

    console.log('🚀 ~ labels', labels);
    return labels;
  }

  return null;
};

var _default = getAllStatusIds;
exports["default"] = _default;