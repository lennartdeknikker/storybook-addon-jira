"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseOverview = _interopRequireDefault(require("./parseTicketData/parseOverview"));

var _parseSubtasks = _interopRequireDefault(require("./parseTicketData/parseSubtasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseTicketData = function parseTicketData(data) {
  console.log('🚀 ~ data in parseTicketData', data);
  var dataObject = JSON.parse(data);
  console.log('🚀 ~ dataObject', dataObject);
  var parsedSubtasks = (0, _parseSubtasks["default"])(dataObject);
  var parsedOverview = (0, _parseOverview["default"])(dataObject, parsedSubtasks);
  var parsedData = {
    overview: parsedOverview,
    subtasks: parsedSubtasks
  };
  return parsedData;
};

var _default = parseTicketData;
exports["default"] = _default;