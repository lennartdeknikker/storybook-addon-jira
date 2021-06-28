"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _AvatarImage = _interopRequireDefault(require("./AvatarImage"));

var _parseAdfToHtml = _interopRequireDefault(require("../../helpers/parseAdfToHtml"));

var _parseCreatedDate = _interopRequireDefault(require("../../helpers/parseCreatedDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentSection = function CommentSection(_ref) {
  var items = _ref.items;

  var CommentSectionTitle = _theming.styled.h2({
    fontSize: '1em',
    fontWeight: 700,
    margin: '0 0 20px 0'
  });

  var CommentSectionList = _theming.styled.ul({
    padding: '10px',
    listStyleType: 'none',
    borderRadius: '5px',
    backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.light,
    marginBottom: '1em'
  });

  var Comment = _theming.styled.li({
    marginBottom: '10px'
  });

  var CommentAuthor = _theming.styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    color: (0, _theming.convert)(_theming.themes.normal).color.dark
  });

  var CommentItem = _theming.styled.div({
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '5px',
    backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.lightest,
    padding: '5px',
    fontWeight: 300,
    '& div p': {
      margin: 0,
      '& + p': {
        marginTop: '5px'
      }
    }
  });

  var CommentBody = _theming.styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '24px'
  });

  var CommentDate = _theming.styled.span({
    fontSize: '0.5rem',
    display: 'block',
    textAlign: 'right',
    width: '100%',
    marginTop: '3px'
  });

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CommentSectionList, null, /*#__PURE__*/_react["default"].createElement(CommentSectionTitle, null, "Comments"), items.map(function (comment, index) {
    return /*#__PURE__*/_react["default"].createElement(Comment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CommentAuthor, null, /*#__PURE__*/_react["default"].createElement(_AvatarImage["default"], {
      src: comment.author.avatar,
      alt: comment.author.name,
      className: "avatar-comment"
    }), comment.author.name), /*#__PURE__*/_react["default"].createElement(CommentItem, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(CommentBody, {
      dangerouslySetInnerHTML: {
        __html: (0, _parseAdfToHtml["default"])(comment.body)
      }
    })), /*#__PURE__*/_react["default"].createElement(CommentDate, null, (0, _parseCreatedDate["default"])(comment.timeStamps.created))));
  })));
};

var _default = CommentSection;
exports["default"] = _default;