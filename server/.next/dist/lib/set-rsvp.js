'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(eventId, guestId, rsvp) {
    var guestRef, guest, g;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db2.default.child('events').child(eventId).child('guests').child(guestId);

          case 2:
            guestRef = _context.sent;
            _context.next = 5;
            return guestRef.once('value');

          case 5:
            guest = _context.sent;
            g = guest.val();

            g.rsvp = rsvp;
            guestRef.set(g);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZXQtcnN2cC5qcyJdLCJuYW1lcyI6WyJldmVudElkIiwiZ3Vlc3RJZCIsInJzdnAiLCJjaGlsZCIsImd1ZXN0UmVmIiwib25jZSIsImd1ZXN0IiwiZyIsInZhbCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozt3RUFFZSxpQkFBT0EsT0FBUCxFQUFnQkMsT0FBaEIsRUFBeUJDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ08sYUFBR0MsS0FBSCxDQUFTLFFBQVQsRUFBbUJBLEtBQW5CLENBQXlCSCxPQUF6QixFQUFrQ0csS0FBbEMsQ0FBd0MsUUFBeEMsRUFBa0RBLEtBQWxELENBQXdERixPQUF4RCxDQURQOztBQUFBO0FBQ1ZHLG9CQURVO0FBQUE7QUFBQSxtQkFFS0EsU0FBU0MsSUFBVCxDQUFjLE9BQWQsQ0FGTDs7QUFBQTtBQUVUQyxpQkFGUztBQUdUQyxhQUhTLEdBR0xELE1BQU1FLEdBQU4sRUFISzs7QUFJYkQsY0FBRUwsSUFBRixHQUFRQSxJQUFSO0FBQ0FFLHFCQUFTSyxHQUFULENBQWFGLENBQWI7O0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzZXQtcnN2cC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGlhbmExL3RlYW5kYmlzY3VpdHMvc2VydmVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4vZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZXZlbnRJZCwgZ3Vlc3RJZCwgcnN2cCkgPT4ge1xuXHRsZXQgZ3Vlc3RSZWYgPSBhd2FpdCBkYi5jaGlsZCgnZXZlbnRzJykuY2hpbGQoZXZlbnRJZCkuY2hpbGQoJ2d1ZXN0cycpLmNoaWxkKGd1ZXN0SWQpO1xuICBsZXQgZ3Vlc3QgPSBhd2FpdCBndWVzdFJlZi5vbmNlKCd2YWx1ZScpO1xuICBsZXQgZyA9IGd1ZXN0LnZhbCgpO1xuICBnLnJzdnA9IHJzdnA7XG4gIGd1ZXN0UmVmLnNldChnKTtcbn07Il19