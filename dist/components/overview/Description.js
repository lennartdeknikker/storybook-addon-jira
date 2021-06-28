"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _parseAdfToHtml = _interopRequireDefault(require("../../helpers/parseAdfToHtml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Description = function Description(_ref) {
  var descriptionAdfString = _ref.descriptionAdfString;
  var descriptionHtmlString = (0, _parseAdfToHtml["default"])(descriptionAdfString);

  var DescriptionTitle = _theming.styled.h2({
    fontSize: '1em',
    fontWeight: 700,
    margin: '0 0 20px 0'
  });

  var DescriptionSection = _theming.styled.div({
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.light,
    marginBottom: '1em'
  });

  var DescriptionCopy = _theming.styled.p({
    display: 'block',
    fontWeight: 300,
    marginTop: 0,
    a: {
      color: '#0052cc',
      textDecoration: 'none'
    }
  });

  return /*#__PURE__*/_react["default"].createElement(DescriptionSection, null, /*#__PURE__*/_react["default"].createElement(DescriptionTitle, null, "Description"), /*#__PURE__*/_react["default"].createElement(DescriptionCopy, {
    dangerouslySetInnerHTML: {
      __html: descriptionHtmlString
    }
  }));
};

var _default = Description;
exports["default"] = _default;