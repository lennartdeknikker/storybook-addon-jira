"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TicketLink = function TicketLink(_ref) {
  var ticketId = _ref.ticketId,
      summary = _ref.summary,
      fontSize = _ref.fontSize;

  var TicketLinkContainer = _theming.styled.div({
    flex: 1
  });

  var TicketLink = _theming.styled.a({
    color: (0, _theming.convert)(_theming.themes.normal).color.dark,
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'block',
    width: 'fit-content',
    ":hover": {
      color: (0, _theming.convert)(_theming.themes.normal).color.darkest
    }
  });

  var TicketTitle = _theming.styled.h1({
    fontSize: fontSize || '1.2rem',
    display: 'block',
    width: 'fit-content'
  });

  return /*#__PURE__*/_react["default"].createElement(TicketLinkContainer, null, /*#__PURE__*/_react["default"].createElement(TicketLink, {
    href: "".concat(process.env.STORYBOOK_JIRA_BASE_URL, "/").concat(ticketId),
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(TicketTitle, null, /*#__PURE__*/_react["default"].createElement("strong", null, ticketId, summary ? ':' : '', " "), summary || '', /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "link"
  }))));
};

var _default = TicketLink;
exports["default"] = _default;