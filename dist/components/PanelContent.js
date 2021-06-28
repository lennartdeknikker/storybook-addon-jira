"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var _api = require("@storybook/api");

var _getAllStatusIds = _interopRequireDefault(require("../helpers/getAllStatusIds"));

var _List = _interopRequireDefault(require("./List"));

var _Overview = _interopRequireDefault(require("./Overview"));

var _parseCamelCase = require("../helpers/parseCamelCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PanelContent = function PanelContent(_ref) {
  var _results$subtasks;

  var results = _ref.results,
      fetchData = _ref.fetchData,
      fetchingState = _ref.fetchingState;
  var jiraSettings = (0, _api.useParameter)('jira', {});
  (0, _react.useEffect)(function () {
    return fetchData(jiraSettings === null || jiraSettings === void 0 ? void 0 : jiraSettings.id);
  }, [jiraSettings === null || jiraSettings === void 0 ? void 0 : jiraSettings.id]);
  var statusIds = (0, _getAllStatusIds["default"])(results === null || results === void 0 ? void 0 : (_results$subtasks = results.subtasks) === null || _results$subtasks === void 0 ? void 0 : _results$subtasks.categories, jiraSettings === null || jiraSettings === void 0 ? void 0 : jiraSettings.persistentTabs);

  var EmptyMessage = _theming.styled.div({
    padding: '30px'
  });

  return /*#__PURE__*/_react["default"].createElement(_components.TabsState, {
    initial: "overview",
    backgroundColor: (0, _theming.convert)(_theming.themes.normal).color.light
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "overview",
    title: "Overview",
    color: (0, _theming.convert)(_theming.themes.normal).color.positive
  }, /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
    overviewResults: results.overview,
    jiraSettings: jiraSettings,
    fetchData: fetchData,
    fetchingState: fetchingState
  })), statusIds && statusIds.map(function (statusId, index) {
    var _results$subtasks2, _results$subtasks2$ca, _results$subtasks2$ca2, _convert$color;

    var tabSubtasks = results === null || results === void 0 ? void 0 : (_results$subtasks2 = results.subtasks) === null || _results$subtasks2 === void 0 ? void 0 : (_results$subtasks2$ca = _results$subtasks2.categories) === null || _results$subtasks2$ca === void 0 ? void 0 : (_results$subtasks2$ca2 = _results$subtasks2$ca[statusId]) === null || _results$subtasks2$ca2 === void 0 ? void 0 : _results$subtasks2$ca2.items;
    var tabLabel = (0, _parseCamelCase.parseCamelCaseToString)(statusId);
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "".concat(index),
      id: statusId,
      title: "".concat(tabLabel, " (").concat((tabSubtasks === null || tabSubtasks === void 0 ? void 0 : tabSubtasks.length) || 0, ")"),
      color: (_convert$color = (0, _theming.convert)(_theming.themes.normal).color) === null || _convert$color === void 0 ? void 0 : _convert$color[(tabSubtasks === null || tabSubtasks === void 0 ? void 0 : tabSubtasks.length) > 0 ? 'darker' : 'mediumdark']
    }, (tabSubtasks === null || tabSubtasks === void 0 ? void 0 : tabSubtasks.length) > 0 ? /*#__PURE__*/_react["default"].createElement(_List["default"], {
      tabSubtasks: tabSubtasks,
      fetchData: fetchData
    }) : /*#__PURE__*/_react["default"].createElement(EmptyMessage, null, "There are no subtasks in this category."));
  }));
};

exports.PanelContent = PanelContent;