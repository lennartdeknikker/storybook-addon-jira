"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _mapJiraColor = _interopRequireDefault(require("../helpers/mapJiraColor"));

var _parseCamelCase = require("../helpers/parseCamelCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createProgressBarCssVariables = function createProgressBarCssVariables(subtasksProgress) {
  var cssVariables = {}; // Add percentages of progressbarParts for widths.

  var _iterator = _createForOfIteratorHelper(subtasksProgress),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var subtaskProgress = _step.value;
      cssVariables["--".concat(subtaskProgress.id, "-width")] = "".concat(subtaskProgress === null || subtaskProgress === void 0 ? void 0 : subtaskProgress.percentage, "%");
      cssVariables["--".concat(subtaskProgress.id, "-color")] = (0, _mapJiraColor["default"])(subtaskProgress === null || subtaskProgress === void 0 ? void 0 : subtaskProgress.color);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return cssVariables;
};

var ProgressBar = function ProgressBar(_ref) {
  var _subtasksProgress$, _subtasksProgress$2;

  var subtasksProgress = _ref.subtasksProgress,
      idsInOrder = _ref.idsInOrder;
  if (idsInOrder) subtasksProgress.sort(function (a, b) {
    return idsInOrder.indexOf(a.id) < idsInOrder.indexOf(b.id) ? 1 : -1;
  });

  var ProgressBarContainer = _theming.styled.div({
    display: 'flex',
    width: '100%',
    marginTop: '15px'
  });

  var ProgressBarWrapper = _theming.styled.div(_objectSpread(_objectSpread({}, createProgressBarCssVariables(subtasksProgress)), {}, {
    backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.light,
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    flex: 1,
    height: '10px'
  }));

  var ProgressBarPart = _theming.styled.div({
    height: '100%',
    width: '100%',
    maxWidth: '0',
    transition: 'max-width 1s ease'
  });

  var ProgressBarLabel = _theming.styled.span({
    width: 'fit-content',
    fontSize: '.5rem',
    paddingLeft: '10px'
  });

  return /*#__PURE__*/_react["default"].createElement(ProgressBarContainer, null, /*#__PURE__*/_react["default"].createElement(ProgressBarWrapper, null, subtasksProgress === null || subtasksProgress === void 0 ? void 0 : subtasksProgress.map(function (subtaskProgress, index) {
    return /*#__PURE__*/_react["default"].createElement(ProgressBarPart, {
      key: index,
      className: "ProgressBar-".concat(subtaskProgress.id),
      style: {
        maxWidth: "var(--".concat(subtaskProgress.id, "-width)"),
        backgroundColor: "var(--".concat(subtaskProgress.id, "-color)")
      }
    });
  })), /*#__PURE__*/_react["default"].createElement(ProgressBarLabel, null, (_subtasksProgress$ = subtasksProgress[0]) === null || _subtasksProgress$ === void 0 ? void 0 : _subtasksProgress$.percentage, "% ", (_subtasksProgress$2 = subtasksProgress[0]) === null || _subtasksProgress$2 === void 0 ? void 0 : _subtasksProgress$2.id));
};

var _default = ProgressBar;
exports["default"] = _default;