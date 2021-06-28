"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("@storybook/api");

var _components = require("@storybook/components");

var _constants = require("./constants");

var _PanelContent = require("./components/PanelContent");

var _parseCamelCase = require("./helpers/parseCamelCase");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Panel = function Panel(props) {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  var _useAddonState = (0, _api.useAddonState)(_constants.ADDON_ID, {
    overview: {},
    subtasks: {},
    data: {}
  }),
      _useAddonState2 = _slicedToArray(_useAddonState, 2),
      results = _useAddonState2[0],
      setResults = _useAddonState2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fetchingState = _useState2[0],
      setFetchingState = _useState2[1]; // https://storybook.js.org/docs/react/addons/addons-api#usechannel


  var emit = (0, _api.useChannel)(_defineProperty({}, _constants.EVENTS.RESULT, function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var parsedData, isForSubtask, updatedResults, statusIdOfSubtask, idOfSubtask;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parsedData = _ref.parsedData, isForSubtask = _ref.isForSubtask;

              if (!isForSubtask) {
                setResults(parsedData);
                localStorage.setItem('results', JSON.stringify(parsedData));
              } else {
                updatedResults = JSON.parse(localStorage.getItem('results'));
                statusIdOfSubtask = (0, _parseCamelCase.parseToCamelCase)(parsedData.overview.status.label);
                idOfSubtask = parsedData.overview.ticketId;
                updatedResults.subtasks.categories[statusIdOfSubtask].items.map(function (item) {
                  if (item.id === idOfSubtask) item.data = parsedData;
                  return item;
                });
                setResults(updatedResults);
                localStorage.setItem('results', JSON.stringify(updatedResults));
              }

              setFetchingState(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()));

  var fetchData = function fetchData(ticketId) {
    var isForSubtask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setFetchingState(true);
    emit(_constants.EVENTS.REQUEST, {
      ticketId: ticketId,
      isForSubtask: isForSubtask
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_PanelContent.PanelContent, {
    fetchingState: fetchingState,
    results: results,
    fetchData: fetchData,
    clearData: function clearData() {
      return emit(_constants.EVENTS.CLEAR);
    }
  }));
};

exports.Panel = Panel;