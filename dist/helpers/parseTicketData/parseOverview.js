"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getProgressFromParsedSubtasks = _interopRequireDefault(require("./parseOverview/getProgressFromParsedSubtasks"));

var _parseComments = _interopRequireDefault(require("./parseOverview/parseComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseOverview = function parseOverview(data, parsedSubtasks) {
  var _data$fields, _data$fields$status, _data$fields2, _data$fields2$status, _data$fields2$status$, _data$fields3, _data$fields4, _data$fields5, _data$fields5$assigne, _data$fields6, _data$fields6$assigne, _data$fields7, _data$fields8, _data$fields9, _data$fields10, _data$fields11, _data$fields11$report, _data$fields12, _data$fields12$report, _data$fields13, _data$fields13$commen, _data$fields13$commen2;

  return {
    ticketId: data === null || data === void 0 ? void 0 : data.key,
    status: {
      label: data === null || data === void 0 ? void 0 : (_data$fields = data.fields) === null || _data$fields === void 0 ? void 0 : (_data$fields$status = _data$fields.status) === null || _data$fields$status === void 0 ? void 0 : _data$fields$status.name,
      color: data === null || data === void 0 ? void 0 : (_data$fields2 = data.fields) === null || _data$fields2 === void 0 ? void 0 : (_data$fields2$status = _data$fields2.status) === null || _data$fields2$status === void 0 ? void 0 : (_data$fields2$status$ = _data$fields2$status.statusCategory) === null || _data$fields2$status$ === void 0 ? void 0 : _data$fields2$status$.colorName
    },
    subtasksProgress: (0, _getProgressFromParsedSubtasks["default"])(parsedSubtasks),
    lastUpdated: new Date(data === null || data === void 0 ? void 0 : (_data$fields3 = data.fields) === null || _data$fields3 === void 0 ? void 0 : _data$fields3.updated).toDateString(),
    created: new Date(data === null || data === void 0 ? void 0 : (_data$fields4 = data.fields) === null || _data$fields4 === void 0 ? void 0 : _data$fields4.created).toDateString(),
    assignedTo: {
      name: data === null || data === void 0 ? void 0 : (_data$fields5 = data.fields) === null || _data$fields5 === void 0 ? void 0 : (_data$fields5$assigne = _data$fields5.assignee) === null || _data$fields5$assigne === void 0 ? void 0 : _data$fields5$assigne.displayName,
      avatar: data === null || data === void 0 ? void 0 : (_data$fields6 = data.fields) === null || _data$fields6 === void 0 ? void 0 : (_data$fields6$assigne = _data$fields6.assignee) === null || _data$fields6$assigne === void 0 ? void 0 : _data$fields6$assigne.avatarUrls['48x48']
    },
    summary: data === null || data === void 0 ? void 0 : (_data$fields7 = data.fields) === null || _data$fields7 === void 0 ? void 0 : _data$fields7.summary,
    description: data === null || data === void 0 ? void 0 : (_data$fields8 = data.fields) === null || _data$fields8 === void 0 ? void 0 : _data$fields8.description,
    priority: {
      label: data === null || data === void 0 ? void 0 : (_data$fields9 = data.fields) === null || _data$fields9 === void 0 ? void 0 : _data$fields9.priority.name,
      icon: data === null || data === void 0 ? void 0 : (_data$fields10 = data.fields) === null || _data$fields10 === void 0 ? void 0 : _data$fields10.priority.iconUrl
    },
    reporter: {
      name: data === null || data === void 0 ? void 0 : (_data$fields11 = data.fields) === null || _data$fields11 === void 0 ? void 0 : (_data$fields11$report = _data$fields11.reporter) === null || _data$fields11$report === void 0 ? void 0 : _data$fields11$report.displayName,
      avatar: data === null || data === void 0 ? void 0 : (_data$fields12 = data.fields) === null || _data$fields12 === void 0 ? void 0 : (_data$fields12$report = _data$fields12.reporter) === null || _data$fields12$report === void 0 ? void 0 : _data$fields12$report.avatarUrls['48x48']
    },
    comments: (data === null || data === void 0 ? void 0 : (_data$fields13 = data.fields) === null || _data$fields13 === void 0 ? void 0 : (_data$fields13$commen = _data$fields13.comment) === null || _data$fields13$commen === void 0 ? void 0 : (_data$fields13$commen2 = _data$fields13$commen.comments) === null || _data$fields13$commen2 === void 0 ? void 0 : _data$fields13$commen2.length) > 0 ? (0, _parseComments["default"])(data.fields.comment.comments) : []
  };
};

var _default = parseOverview;
exports["default"] = _default;