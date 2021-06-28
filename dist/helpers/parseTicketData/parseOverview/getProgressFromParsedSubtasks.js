"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getProgressFromParsedSubtasks = function getProgressFromParsedSubtasks(parsedSubtasks) {
  var percentages = [];

  for (var statusId in parsedSubtasks.categories) {
    percentages.push({
      id: statusId,
      percentage: 100 / parsedSubtasks.amount * parsedSubtasks.categories[statusId].amount,
      color: parsedSubtasks.categories[statusId].color
    });
  }

  return percentages;
};

var _default = getProgressFromParsedSubtasks;
exports["default"] = _default;