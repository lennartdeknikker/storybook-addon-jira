"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseToCamelCase = _interopRequireDefault(require("./parseToCamelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var parseData = function parseData(data) {
  var _data$fields, _data$fields2, _data$fields2$status, _data$fields3, _data$fields4, _data$fields5, _data$fields6, _data$fields7;

  var parsedData = {
    overview: null,
    subtasks: null,
    data: data
  };
  var parsedSubtasksData = {};

  var getStatusKey = function getStatusKey(subTask) {
    return (0, _parseToCamelCase["default"])(subTask.fields.status.name.toLowerCase());
  };

  var subtasksData = data === null || data === void 0 ? void 0 : (_data$fields = data.fields) === null || _data$fields === void 0 ? void 0 : _data$fields.subtasks;

  var _iterator = _createForOfIteratorHelper(subtasksData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var subTask = _step.value;
      var statusKey = getStatusKey(subTask);
      if (!parsedSubtasksData[statusKey]) parsedSubtasksData[statusKey] = [];
      parsedSubtasksData[statusKey].push({
        title: subTask.key,
        description: subTask.fields.summary,
        data: subTask
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  parsedData.subtasks = parsedSubtasksData;
  parsedData.overview = {
    status: data === null || data === void 0 ? void 0 : (_data$fields2 = data.fields) === null || _data$fields2 === void 0 ? void 0 : (_data$fields2$status = _data$fields2.status) === null || _data$fields2$status === void 0 ? void 0 : _data$fields2$status.name,
    lastUpdated: new Date(data === null || data === void 0 ? void 0 : (_data$fields3 = data.fields) === null || _data$fields3 === void 0 ? void 0 : _data$fields3.updated).toDateString(),
    Created: new Date(data === null || data === void 0 ? void 0 : (_data$fields4 = data.fields) === null || _data$fields4 === void 0 ? void 0 : _data$fields4.created).toDateString(),
    AssignedTo: data === null || data === void 0 ? void 0 : (_data$fields5 = data.fields) === null || _data$fields5 === void 0 ? void 0 : _data$fields5.assignee.displayName,
    Description: data === null || data === void 0 ? void 0 : (_data$fields6 = data.fields) === null || _data$fields6 === void 0 ? void 0 : _data$fields6.summary,
    Priority: data === null || data === void 0 ? void 0 : (_data$fields7 = data.fields) === null || _data$fields7 === void 0 ? void 0 : _data$fields7.priority.name
  };
  console.log('data parsed to:', parsedData);
  return parsedData;
};

var _default = parseData;
exports["default"] = _default;