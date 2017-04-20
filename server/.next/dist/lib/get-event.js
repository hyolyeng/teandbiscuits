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

            if (!val) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', transform(val));

          case 8:
            return _context.abrupt('return', null);

          case 9:
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
    name: val.name,
    maximum_guests: val.maximum_guests,
    minimum_guests: val.minimum_guests,
    place: val.place,
    time: new Date(val.time * 1000),
    guests: val.guests
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9nZXQtZXZlbnQuanMiXSwibmFtZXMiOlsidHJhbnNmb3JtIiwiaWQiLCJjaGlsZCIsIm9uY2UiLCJldmVudCIsInZhbCIsIm5hbWUiLCJtYXhpbXVtX2d1ZXN0cyIsIm1pbmltdW1fZ3Vlc3RzIiwicGxhY2UiLCJ0aW1lIiwiRGF0ZSIsImd1ZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7UUFlZ0JBLFMsR0FBQUEsUzs7QUFmaEI7Ozs7Ozs7d0VBRWUsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTSxhQUNoQkMsS0FEZ0IsQ0FDVixRQURVLEVBRWhCQSxLQUZnQixDQUVWRCxFQUZVLEVBR2hCRSxJQUhnQixDQUdYLE9BSFcsQ0FETjs7QUFBQTtBQUNSQyxpQkFEUTtBQUtQQyxlQUxPLEdBS0RELE1BQU1DLEdBQU4sRUFMQzs7QUFBQSxpQkFNVEEsR0FOUztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FPSkwsVUFBVUssR0FBVixDQVBJOztBQUFBO0FBQUEsNkNBU0osSUFUSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O0FBYVIsU0FBU0wsU0FBVCxDQUFtQkssR0FBbkIsRUFBd0I7QUFDN0IsU0FBTztBQUNMQyxVQUFNRCxJQUFJQyxJQURMO0FBRUxDLG9CQUFnQkYsSUFBSUUsY0FGZjtBQUdMQyxvQkFBZ0JILElBQUlHLGNBSGY7QUFJTEMsV0FBT0osSUFBSUksS0FKTjtBQUtMQyxVQUFNLElBQUlDLElBQUosQ0FBU04sSUFBSUssSUFBSixHQUFXLElBQXBCLENBTEQ7QUFNTEUsWUFBUVAsSUFBSU87QUFOUCxHQUFQO0FBUUQiLCJmaWxlIjoiZ2V0LWV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWFuYTEvdGVhbmRiaXNjdWl0cy9zZXJ2ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpZCkgPT4ge1xuXHRjb25zdCBldmVudCA9IGF3YWl0IGRiXG4gICAgLmNoaWxkKCdldmVudHMnKVxuICAgIC5jaGlsZChpZClcbiAgICAub25jZSgndmFsdWUnKTtcbiAgY29uc3QgdmFsID0gZXZlbnQudmFsKCk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogdmFsLm5hbWUsXG4gICAgbWF4aW11bV9ndWVzdHM6IHZhbC5tYXhpbXVtX2d1ZXN0cyxcbiAgICBtaW5pbXVtX2d1ZXN0czogdmFsLm1pbmltdW1fZ3Vlc3RzLFxuICAgIHBsYWNlOiB2YWwucGxhY2UsXG4gICAgdGltZTogbmV3IERhdGUodmFsLnRpbWUgKiAxMDAwKSxcbiAgICBndWVzdHM6IHZhbC5ndWVzdHNcbiAgfTtcbn07Il19