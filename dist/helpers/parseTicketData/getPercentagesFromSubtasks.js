"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getPercentagesFromSubtasks = function getPercentagesFromSubtasks(subtasks) {
  var percentages = [];

  for (var item in subtasks.categories) {
    percentages.push({
      id: item,
      percentage: subtasks.categories[item].percentage
    });
  }

  return percentages;
};

var _default = getPercentagesFromSubtasks;
exports["default"] = _default;