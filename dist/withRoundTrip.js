"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRoundTrip = void 0;

var _clientApi = require("@storybook/client-api");

var _coreEvents = require("@storybook/core-events");

var _constants = require("./constants");

var _parseTicketData = _interopRequireDefault(require("./helpers/parseTicketData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// something to have a look at:
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-storyfn
var withRoundTrip = function withRoundTrip(storyFn) {
  var _useChannel;

  var clearData = function clearData() {
    emit(_constants.EVENTS.RESULT, {
      overview: {},
      subtasks: {},
      data: {}
    });
  };

  var emit = (0, _clientApi.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _constants.EVENTS.REQUEST, function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var ticketId, isForSubtask, data, _process$env, fetchedData, parsedData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ticketId = _ref.ticketId, isForSubtask = _ref.isForSubtask;
              data = null;

              if (!ticketId) {
                _context.next = 11;
                break;
              }

              _context.next = 5;
              return fetch("".concat((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.STORYBOOK_MIDDLEWARE_JIRA_ENDPOINT, "?ticketId=").concat(ticketId));

            case 5:
              fetchedData = _context.sent;
              console.log('🚀 ~ fetchedData', fetchedData);
              _context.next = 9;
              return fetchedData.json();

            case 9:
              data = _context.sent;
              console.log('🚀 ~ data in withRoundTrip', data);

            case 11:
              parsedData = (0, _parseTicketData["default"])(data);
              emit(_constants.EVENTS.RESULT, {
                parsedData: parsedData,
                isForSubtask: isForSubtask
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()), _defineProperty(_useChannel, _coreEvents.STORY_CHANGED, clearData), _defineProperty(_useChannel, _constants.EVENTS.CLEAR, clearData), _useChannel));
  return storyFn();
};

exports.withRoundTrip = withRoundTrip;