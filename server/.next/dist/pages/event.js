'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/diana1/teandbiscuits/server/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/diana1/teandbiscuits/server/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _event = require('../components/event');

var _event2 = _interopRequireDefault(_event);

var _getEvent = require('../lib/get-event');

var _getEvent2 = _interopRequireDefault(_getEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);
  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req,
            _ref2$query = _ref2.query,
            id = _ref2$query.id,
            uId = _ref2$query.uId;
        var event;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _getEvent2.default)(id);

              case 2:
                event = _context.sent;
                return _context.abrupt('return', { event: event, id: id, uId: uId });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          event = _props.event,
          uId = _props.uId;

      return _react2.default.createElement(_event2.default, { event: event, uId: uId });
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50LmpzIl0sIm5hbWVzIjpbInJlcSIsInF1ZXJ5IiwiaWQiLCJ1SWQiLCJldmVudCIsInByb3BzIiwic3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztZQUlpQ0EsRyxTQUFBQSxHO2dDQUFLQyxLO1lBQVNDLEUsZUFBQUEsRTtZQUFJQyxHLGVBQUFBLEc7Ozs7Ozs7dUJBQzNCLHdCQUFTRCxFQUFULEM7OztBQUFkRSxxQjtpREFDQyxFQUFFQSxZQUFGLEVBQVNGLE1BQVQsRUFBYUMsUUFBYixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVCxrQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFFUTtBQUFBLG1CQUNnQixLQUFLRCxLQURyQjtBQUFBLFVBQ0NELEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FELEdBRFIsVUFDUUEsR0FEUjs7QUFFUCxhQUFPLGlEQUFPLE9BQU9DLEtBQWQsRUFBcUIsS0FBS0QsR0FBMUIsR0FBUDtBQUNEOzs7RUFmMEIsZ0JBQU1JLFMiLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpYW5hMS90ZWFuZGJpc2N1aXRzL3NlcnZlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBFdmVudCBmcm9tICcuLi9jb21wb25lbnRzL2V2ZW50J1xuaW1wb3J0IGdldEV2ZW50IGZyb20gJy4uL2xpYi9nZXQtZXZlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeTogeyBpZCwgdUlkIH0gfSkge1xuICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgZ2V0RXZlbnQoaWQpO1xuICAgIHJldHVybiB7IGV2ZW50LCBpZCwgdUlkIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBldmVudCwgdUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8RXZlbnQgZXZlbnQ9e2V2ZW50fSB1SWQ9e3VJZH0gLz47XG4gIH1cbn0iXX0=