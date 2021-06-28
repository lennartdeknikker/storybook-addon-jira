"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var _CommentSection = _interopRequireDefault(require("./overview/CommentSection"));

var _PropertyBar = _interopRequireDefault(require("./overview/PropertyBar"));

var _TicketLink = _interopRequireDefault(require("./overview/TicketLink"));

var _Description = _interopRequireDefault(require("./overview/Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ListWrapper = _theming.styled.ul({
  listStyle: "none",
  fontSize: 14,
  padding: 0,
  margin: 0
});

var Wrapper = _theming.styled.div({
  display: "flex",
  width: "100%",
  borderBottom: "1px solid ".concat((0, _theming.convert)(_theming.themes.normal).appBorderColor),
  "&:hover": {
    background: (0, _theming.convert)(_theming.themes.normal).background.hoverable
  }
});

var Icon = (0, _theming.styled)(_components.Icons)({
  height: 10,
  width: 10,
  minWidth: 10,
  color: (0, _theming.convert)(_theming.themes.normal).color.mediumdark,
  marginRight: 10,
  transition: "transform 0.1s ease-in-out",
  alignSelf: "center",
  display: "inline-flex"
});

var HeaderBar = _theming.styled.div({
  padding: (0, _theming.convert)(_theming.themes.normal).layoutMargin,
  paddingLeft: '30px',
  paddingRight: '30px',
  overflow: 'hidden',
  background: (0, _theming.convert)(_theming.themes.normal).color.medium,
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  width: "100%",
  display: 'flex',
  "&:focus": {
    outline: "0 none",
    borderLeft: "3px solid ".concat((0, _theming.convert)(_theming.themes.normal).color.secondary)
  }
});

var DetailView = _theming.styled.div({
  padding: (0, _theming.convert)(_theming.themes.normal).layoutMargin,
  paddingLeft: '30px',
  paddingRight: '30px',
  marginBottom: (0, _theming.convert)(_theming.themes.normal).layoutMargin,
  backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.lightest
});

var ListItem = function ListItem(_ref) {
  var _tabSubtask$data, _overviewData$comment, _overviewData$comment2;

  var tabSubtask = _ref.tabSubtask,
      fetchData = _ref.fetchData;
  var overviewData = tabSubtask === null || tabSubtask === void 0 ? void 0 : (_tabSubtask$data = tabSubtask.data) === null || _tabSubtask$data === void 0 ? void 0 : _tabSubtask$data.overview;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var clickHandler = function clickHandler() {
    if (!overviewData) fetchData(tabSubtask.id, true);
    setOpened(!opened);
  };

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(HeaderBar, {
    onClick: clickHandler,
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: "chevrondown",
    size: 10,
    color: (0, _theming.convert)(_theming.themes.normal).appBorderColor,
    style: {
      transform: "rotate(".concat(opened ? 0 : -90, "deg)")
    }
  }), /*#__PURE__*/_react["default"].createElement(_TicketLink["default"], {
    ticketId: tabSubtask.id,
    summary: tabSubtask.summary,
    textColor: (0, _theming.convert)(_theming.themes.normal).color.lightest,
    fontSize: "1rem"
  }))), opened && overviewData ? /*#__PURE__*/_react["default"].createElement(DetailView, null, /*#__PURE__*/_react["default"].createElement(_PropertyBar["default"], {
    reporter: overviewData === null || overviewData === void 0 ? void 0 : overviewData.reporter,
    assignedTo: overviewData === null || overviewData === void 0 ? void 0 : overviewData.assignedTo,
    priority: overviewData === null || overviewData === void 0 ? void 0 : overviewData.priority,
    created: overviewData === null || overviewData === void 0 ? void 0 : overviewData.created,
    lastUpdated: overviewData === null || overviewData === void 0 ? void 0 : overviewData.lastUpdated
  }), (overviewData === null || overviewData === void 0 ? void 0 : overviewData.description) && /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    descriptionAdfString: overviewData.description
  }), (overviewData === null || overviewData === void 0 ? void 0 : (_overviewData$comment = overviewData.comments) === null || _overviewData$comment === void 0 ? void 0 : (_overviewData$comment2 = _overviewData$comment.items) === null || _overviewData$comment2 === void 0 ? void 0 : _overviewData$comment2.length) > 0 && /*#__PURE__*/_react["default"].createElement(_CommentSection["default"], tabSubtask.data.overview.comments)) : null);
};

exports.ListItem = ListItem;

var List = function List(_ref2) {
  var tabSubtasks = _ref2.tabSubtasks,
      fetchData = _ref2.fetchData;
  return /*#__PURE__*/_react["default"].createElement(ListWrapper, null, tabSubtasks.map(function (tabSubtask, id) {
    return /*#__PURE__*/_react["default"].createElement(ListItem, {
      key: id,
      tabSubtask: tabSubtask,
      fetchData: fetchData
    });
  }));
};

var _default = List;
exports["default"] = _default;