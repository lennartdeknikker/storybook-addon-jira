"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _parseCreatedDate = _interopRequireDefault(require("../../helpers/parseCreatedDate"));

var _AvatarImage = _interopRequireDefault(require("./AvatarImage"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PropertyBar = function PropertyBar(_ref) {
  var fetchId = _ref.fetchId,
      fetchData = _ref.fetchData,
      fetchingState = _ref.fetchingState,
      reporter = _ref.reporter,
      assignedTo = _ref.assignedTo,
      priority = _ref.priority,
      created = _ref.created,
      lastUpdated = _ref.lastUpdated;

  var PropertyBar = _theming.styled.div({
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap'
  });

  var HeaderItem = _theming.styled.div({
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    margin: '10px 20px 10px 0',
    "&:nth-of-type(6)": {
      flex: 1,
      justifyContent: 'flex-end',
      marginRight: 0
    }
  });

  var HeaderItemValue = _theming.styled.span({
    fontWeight: 300,
    textIndent: '5px'
  });

  var parseUpdatedDate = function parseUpdatedDate(date) {
    var lastUpdated = new Date(date);
    var currentDate = new Date();
    var differenceInSeconds = currentDate - lastUpdated;
    var differenceInDays = Math.floor(differenceInSeconds / (1000 * 3600 * 24));
    var suffix = differenceInDays === 1 ? 'day' : 'days';
    return " ".concat(differenceInDays, " ").concat(suffix, " ago");
  };

  var RefreshButton = _theming.styled.button(function (_ref2) {
    var theme = _ref2.theme;
    return {
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '3px 8px',
      transition: 'all 150ms ease-out',
      verticalAlign: 'top',
      userSelect: 'none',
      margin: 0,
      backgroundColor: theme.base === 'light' ? '#EAF3FC' : theme.color.border,
      boxShadow: theme.base === 'light' ? "".concat(theme.color.border, " 0 0 0 1px inset") : "".concat(theme.color.darker, "  0 0 0 1px inset"),
      color: theme.color.secondary,
      '&:hover': {
        background: '#EAF3FC'
      },
      '&:focus': {
        boxShadow: "".concat(theme.color.secondary, " 0 0 0 1px inset"),
        outline: 'none'
      },
      svg: {
        display: 'block',
        height: 14,
        width: 14
      }
    };
  });

  return /*#__PURE__*/_react["default"].createElement(PropertyBar, null, /*#__PURE__*/_react["default"].createElement(HeaderItem, null, "Reporter:", reporter ? reporter !== null && reporter !== void 0 && reporter.avatar ? /*#__PURE__*/_react["default"].createElement(_AvatarImage["default"], {
    src: reporter.avatar,
    alt: reporter === null || reporter === void 0 ? void 0 : reporter.name
  }) : /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, reporter === null || reporter === void 0 ? void 0 : reporter.name) : /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, "...")), /*#__PURE__*/_react["default"].createElement(HeaderItem, null, "Assigned to:", assignedTo ? assignedTo !== null && assignedTo !== void 0 && assignedTo.avatar ? /*#__PURE__*/_react["default"].createElement(_AvatarImage["default"], {
    src: assignedTo.avatar,
    alt: assignedTo === null || assignedTo === void 0 ? void 0 : assignedTo.name
  }) : /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, (assignedTo === null || assignedTo === void 0 ? void 0 : assignedTo.name) || 'not assigned yet') : /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, "...")), /*#__PURE__*/_react["default"].createElement(HeaderItem, null, "Priority:", priority ? (priority === null || priority === void 0 ? void 0 : priority.label) === 'Medium' ? /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, "-") : /*#__PURE__*/_react["default"].createElement(_AvatarImage["default"], {
    src: priority === null || priority === void 0 ? void 0 : priority.icon,
    alt: priority === null || priority === void 0 ? void 0 : priority.label,
    className: "avatar-priority"
  }) : /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, "...")), /*#__PURE__*/_react["default"].createElement(HeaderItem, null, "Created on:", /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, created ? (0, _parseCreatedDate["default"])(created) : '...')), /*#__PURE__*/_react["default"].createElement(HeaderItem, null, "Last updated:", /*#__PURE__*/_react["default"].createElement(HeaderItemValue, null, lastUpdated ? parseUpdatedDate(lastUpdated) : '...')), fetchId && fetchData && /*#__PURE__*/_react["default"].createElement(HeaderItem, null, /*#__PURE__*/_react["default"].createElement(RefreshButton, {
    title: "Refresh",
    onClick: function onClick() {
      return fetchData(fetchId);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "sync",
    className: "icon-refresh".concat(fetchingState ? ' icon-refreshing' : '')
  }))));
};

var _default = PropertyBar;
exports["default"] = _default;