"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getPercentagesFromSubtasks = function getPercentagesFromSubtasks(parsedSubtasks) {
  var percentages = [];

  for (var statusId in parsedSubtasks.categories) {
    percentages.push({
      id: statusId,
      percentage: 100 / parsedSubtasks.amount * parsedSubtasks.categories[statusId].amount
    });
  }

  return percentages;
};

var _default = getPercentagesFromSubtasks;
exports["default"] = _default;