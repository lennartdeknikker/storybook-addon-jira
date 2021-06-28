"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ProgressBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var subtasksProgress = _ref.subtasksProgress;
  console.log('🚀 ~ subtasksProgress', subtasksProgress);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProgressBar"
  }, "test", subtasksProgress.map(function (subtaskProgress, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "ProgressBar-".concat(subtaskProgress.id)
    }, subtaskProgress.id);
  }));
};

var _default = ProgressBar;
exports["default"] = _default;