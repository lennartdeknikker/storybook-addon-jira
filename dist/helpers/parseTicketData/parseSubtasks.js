"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseCamelCase = require("../parseCamelCase");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var parseSubtasks = function parseSubtasks(data) {
  var _data$fields, _data$fields2, _data$fields2$subtask;

  // create subtasks object
  var parsedSubtasks = {
    amount: 0,
    categories: {}
  }; // calculate total amount of subtasks

  parsedSubtasks.amount = data === null || data === void 0 ? void 0 : (_data$fields = data.fields) === null || _data$fields === void 0 ? void 0 : _data$fields.subtasks.length;

  if ((data === null || data === void 0 ? void 0 : (_data$fields2 = data.fields) === null || _data$fields2 === void 0 ? void 0 : (_data$fields2$subtask = _data$fields2.subtasks) === null || _data$fields2$subtask === void 0 ? void 0 : _data$fields2$subtask.length) > 0) {
    var _data$fields3;

    var _iterator = _createForOfIteratorHelper(data === null || data === void 0 ? void 0 : (_data$fields3 = data.fields) === null || _data$fields3 === void 0 ? void 0 : _data$fields3.subtasks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var subtask = _step.value;
        // pull status from subtask and parse to statusId
        var statusId = (0, _parseCamelCase.parseToCamelCase)(subtask.fields.status.name); // use statusId to create the category if it does not exist yet.

        if (!parsedSubtasks.categories[statusId]) parsedSubtasks.categories[statusId] = {
          color: subtask.fields.status.statusCategory.colorName,
          amount: 0,
          items: []
        }; // update amount of subtasks for this status category

        parsedSubtasks.categories[statusId].amount++; // add subtask to category

        parsedSubtasks.categories[statusId].items.push({
          id: subtask.key,
          summary: subtask.fields.summary,
          apiLink: subtask.self
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return parsedSubtasks;
};

var _default = parseSubtasks;
exports["default"] = _default;