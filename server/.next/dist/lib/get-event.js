'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.transform = transform;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
    var event, val;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db2.default.child('events').child(id).once('value');

          case 2:
            event = _context.sent;
            val = event.val();

            console.log(event);
            console.log("*****");
            console.log(event.val());

            if (!val) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', transform(val));

          case 11:
            return _context.abrupt('return', null);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

function transform(val) {
  return {
    id: val.id,
    name: val.name,
    maximum_guests: val.maximum_guests,
    minimum_guests: val.minimum_guests,
    place: val.place,
    time: new Date(val.time * 1000),
    guests: val.guests
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9nZXQtZXZlbnQuanMiXSwibmFtZXMiOlsidHJhbnNmb3JtIiwiaWQiLCJjaGlsZCIsIm9uY2UiLCJldmVudCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWF4aW11bV9ndWVzdHMiLCJtaW5pbXVtX2d1ZXN0cyIsInBsYWNlIiwidGltZSIsIkRhdGUiLCJndWVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1FBa0JnQkEsUyxHQUFBQSxTOztBQWxCaEI7Ozs7Ozs7d0VBRWUsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTSxhQUNoQkMsS0FEZ0IsQ0FDVixRQURVLEVBRWhCQSxLQUZnQixDQUVWRCxFQUZVLEVBR2hCRSxJQUhnQixDQUdYLE9BSFcsQ0FETjs7QUFBQTtBQUNSQyxpQkFEUTtBQUtQQyxlQUxPLEdBS0RELE1BQU1DLEdBQU4sRUFMQzs7QUFNYkMsb0JBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxvQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWUgsTUFBTUMsR0FBTixFQUFaOztBQVJhLGlCQVNUQSxHQVRTO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVVKTCxVQUFVSyxHQUFWLENBVkk7O0FBQUE7QUFBQSw2Q0FZSixJQVpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7QUFnQlIsU0FBU0wsU0FBVCxDQUFtQkssR0FBbkIsRUFBd0I7QUFDN0IsU0FBTztBQUNMSixRQUFJSSxJQUFJSixFQURIO0FBRUxPLFVBQU1ILElBQUlHLElBRkw7QUFHTEMsb0JBQWdCSixJQUFJSSxjQUhmO0FBSUxDLG9CQUFnQkwsSUFBSUssY0FKZjtBQUtMQyxXQUFPTixJQUFJTSxLQUxOO0FBTUxDLFVBQU0sSUFBSUMsSUFBSixDQUFTUixJQUFJTyxJQUFKLEdBQVcsSUFBcEIsQ0FORDtBQU9MRSxZQUFRVCxJQUFJUztBQVBQLEdBQVA7QUFTRCIsImZpbGUiOiJnZXQtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpYW5hMS90ZWFuZGJpc2N1aXRzL3NlcnZlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuL2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGlkKSA9PiB7XG5cdGNvbnN0IGV2ZW50ID0gYXdhaXQgZGJcbiAgICAuY2hpbGQoJ2V2ZW50cycpXG4gICAgLmNoaWxkKGlkKVxuICAgIC5vbmNlKCd2YWx1ZScpO1xuICBjb25zdCB2YWwgPSBldmVudC52YWwoKTtcbiAgY29uc29sZS5sb2coZXZlbnQpO1xuICBjb25zb2xlLmxvZyhcIioqKioqXCIpO1xuICBjb25zb2xlLmxvZyhldmVudC52YWwoKSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHZhbC5pZCxcbiAgICBuYW1lOiB2YWwubmFtZSxcbiAgICBtYXhpbXVtX2d1ZXN0czogdmFsLm1heGltdW1fZ3Vlc3RzLFxuICAgIG1pbmltdW1fZ3Vlc3RzOiB2YWwubWluaW11bV9ndWVzdHMsXG4gICAgcGxhY2U6IHZhbC5wbGFjZSxcbiAgICB0aW1lOiBuZXcgRGF0ZSh2YWwudGltZSAqIDEwMDApLFxuICAgIGd1ZXN0czogdmFsLmd1ZXN0c1xuICB9O1xufTsiXX0=