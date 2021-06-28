"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RequestDataButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _theming = require("@storybook/theming");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _mapJiraColor = _interopRequireDefault(require("../helpers/mapJiraColor"));

var _CommentSection = _interopRequireDefault(require("./overview/CommentSection"));

var _PropertyBar = _interopRequireDefault(require("./overview/PropertyBar"));

var _TicketLink = _interopRequireDefault(require("./overview/TicketLink"));

var _Description = _interopRequireDefault(require("./overview/Description"));

var _parseCamelCase = require("../helpers/parseCamelCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RequestDataButton = _theming.styled.button({
  marginTop: '1rem'
});

exports.RequestDataButton = RequestDataButton;

var Overview = function Overview(_ref) {
  var _overviewResults$stat, _overviewResults$stat2, _overviewResults$subt, _overviewResults$comm, _overviewResults$comm2;

  var overviewResults = _ref.overviewResults,
      jiraSettings = _ref.jiraSettings,
      fetchData = _ref.fetchData,
      fetchingState = _ref.fetchingState;

  var OverviewHeader = _theming.styled.div({
    display: 'flex',
    flexWrap: 'wrap'
  });

  var OverviewContainer = _theming.styled.div({
    textAlign: 'left'
  });

  var StatusLabel = _theming.styled.span({
    display: 'block',
    padding: '10px',
    fontSize: '.5rem',
    backgroundColor: (0, _mapJiraColor["default"])(overviewResults === null || overviewResults === void 0 ? void 0 : (_overviewResults$stat = overviewResults.status) === null || _overviewResults$stat === void 0 ? void 0 : _overviewResults$stat.color),
    color: 'white',
    width: 'fit-content',
    borderRadius: '5px',
    height: 'fit-content',
    marginLeft: '10px'
  });

  return /*#__PURE__*/_react["default"].createElement(_components.Placeholder, null, jiraSettings.id ? /*#__PURE__*/_react["default"].createElement(OverviewContainer, null, /*#__PURE__*/_react["default"].createElement(OverviewHeader, null, /*#__PURE__*/_react["default"].createElement(_TicketLink["default"], {
    ticketId: jiraSettings.id,
    summary: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.summary
  }), /*#__PURE__*/_react["default"].createElement(StatusLabel, null, (overviewResults === null || overviewResults === void 0 ? void 0 : (_overviewResults$stat2 = overviewResults.status) === null || _overviewResults$stat2 === void 0 ? void 0 : _overviewResults$stat2.label) || '...'), (overviewResults === null || overviewResults === void 0 ? void 0 : (_overviewResults$subt = overviewResults.subtasksProgress) === null || _overviewResults$subt === void 0 ? void 0 : _overviewResults$subt.length) > 0 && /*#__PURE__*/_react["default"].createElement(_ProgressBar["default"], {
    subtasksProgress: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.subtasksProgress,
    idsInOrder: jiraSettings === null || jiraSettings === void 0 ? void 0 : jiraSettings.persistentTabs.map(function (tab) {
      return (0, _parseCamelCase.parseToCamelCase)(tab);
    })
  }), /*#__PURE__*/_react["default"].createElement(_PropertyBar["default"], {
    fetchId: jiraSettings.id,
    fetchData: fetchData,
    fetchingState: fetchingState,
    reporter: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.reporter,
    assignedTo: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.assignedTo,
    priority: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.priority,
    created: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.created,
    lastUpdated: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.lastUpdated
  })), (overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.description) && /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    descriptionAdfString: overviewResults === null || overviewResults === void 0 ? void 0 : overviewResults.description
  }), (overviewResults === null || overviewResults === void 0 ? void 0 : (_overviewResults$comm = overviewResults.comments) === null || _overviewResults$comm === void 0 ? void 0 : (_overviewResults$comm2 = _overviewResults$comm.items) === null || _overviewResults$comm2 === void 0 ? void 0 : _overviewResults$comm2.length) > 0 && /*#__PURE__*/_react["default"].createElement(_CommentSection["default"], overviewResults.comments)) : 'Please add a ticket ID to this story.');
};

var _default = Overview;
exports["default"] = _default;