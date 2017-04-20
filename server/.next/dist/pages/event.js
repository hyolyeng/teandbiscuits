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

var _setRsvp = require('../lib/set-rsvp');

var _setRsvp2 = _interopRequireDefault(_setRsvp);

var _head = require('/Users/diana1/teandbiscuits/server/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

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
    key: 'rsvp',
    value: function rsvp(button) {
      console.log(button.target.value);
      var response = button.target.value ? "attending" : "declined";
      (0, _setRsvp2.default)(this.props.id, this.props.uId, response);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          event = _props.event,
          uId = _props.uId;

      if (!event) {
        return this.errorScreen();
      }

      // first let's find out if the maximum guest is reached
      var attending = 0;
      for (var guestId in event.guests) {
        var guest = event.guests[guestId];
        if (guest.rsvp === "attending") {
          attending += 1;
        }
      }

      var actionButtons = _react2.default.createElement(
        'div',
        { className: 'actions' },
        _react2.default.createElement(
          'button',
          { value: true, onClick: this.rsvp.bind(this) },
          'Yes I will attend!'
        ),
        _react2.default.createElement(
          'button',
          { value: false, onClick: this.rsvp.bind(this) },
          'No I can\'t make it :('
        )
      );
      if (attending >= event.maximum_guests) {
        actionButtons = _react2.default.createElement(
          'div',
          null,
          'Sorry, this event is full! Next time check faster!'
        );
      }

      for (var _guestId in event.guests) {
        if (uId == _guestId) {
          var _guest = event.guests[_guestId];
          console.log(_guest.name);
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _head2.default,
              null,
              _react2.default.createElement(
                'title',
                null,
                'Tea & Biscuits Event Response Page'
              ),
              _react2.default.createElement('meta', { charSet: 'utf-8' }),
              _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
            ),
            _react2.default.createElement(_event2.default, { event: event, guestName: _guest.name, rsvp: _guest.rsvp || "Not Yet Replied", uId: uId }),
            actionButtons
          );
        }
      }
      return this.errorScreen();
    }
  }, {
    key: 'errorScreen',
    value: function errorScreen() {
      // TODO
      return _react2.default.createElement(
        'div',
        null,
        ' Oops, something went wrong! '
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V2ZW50LmpzIl0sIm5hbWVzIjpbInJlcSIsInF1ZXJ5IiwiaWQiLCJ1SWQiLCJldmVudCIsInByb3BzIiwic3RhdGUiLCJidXR0b24iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJyZXNwb25zZSIsImVycm9yU2NyZWVuIiwiYXR0ZW5kaW5nIiwiZ3Vlc3RJZCIsImd1ZXN0cyIsImd1ZXN0IiwicnN2cCIsImFjdGlvbkJ1dHRvbnMiLCJiaW5kIiwibWF4aW11bV9ndWVzdHMiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O1lBSWlDQSxHLFNBQUFBLEc7Z0NBQUtDLEs7WUFBU0MsRSxlQUFBQSxFO1lBQUlDLEcsZUFBQUEsRzs7Ozs7Ozt1QkFDM0Isd0JBQVNELEVBQVQsQzs7O0FBQWRFLHFCO2lEQUNDLEVBQUVBLFlBQUYsRUFBU0YsTUFBVCxFQUFhQyxRQUFiLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdULGtCQUFZRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3lCQUVJQyxNLEVBQVE7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixPQUFPRyxNQUFQLENBQWNDLEtBQTFCO0FBQ0EsVUFBSUMsV0FBV0wsT0FBT0csTUFBUCxDQUFjQyxLQUFkLEdBQXNCLFdBQXRCLEdBQW9DLFVBQW5EO0FBQ0EsNkJBQVEsS0FBS04sS0FBTCxDQUFXSCxFQUFuQixFQUF1QixLQUFLRyxLQUFMLENBQVdGLEdBQWxDLEVBQXVDUyxRQUF2QztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDZ0IsS0FBS1AsS0FEckI7QUFBQSxVQUNDRCxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRRCxHQURSLFVBQ1FBLEdBRFI7O0FBRVAsVUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDVixlQUFPLEtBQUtTLFdBQUwsRUFBUDtBQUNEOztBQUVEO0FBQ0EsVUFBSUMsWUFBWSxDQUFoQjtBQUNBLFdBQUssSUFBSUMsT0FBVCxJQUFvQlgsTUFBTVksTUFBMUIsRUFBa0M7QUFDaEMsWUFBSUMsUUFBUWIsTUFBTVksTUFBTixDQUFhRCxPQUFiLENBQVo7QUFDQSxZQUFJRSxNQUFNQyxJQUFOLEtBQWUsV0FBbkIsRUFBZ0M7QUFDOUJKLHVCQUFhLENBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlLLGdCQUFnQjtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDaEI7QUFBQTtBQUFBLFlBQVEsT0FBTyxJQUFmLEVBQXFCLFNBQVMsS0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsSUFBZixDQUE5QjtBQUFBO0FBQUEsU0FEZ0I7QUFFaEI7QUFBQTtBQUFBLFlBQVEsT0FBTyxLQUFmLEVBQXNCLFNBQVMsS0FBS0YsSUFBTCxDQUFVRSxJQUFWLENBQWUsSUFBZixDQUEvQjtBQUFBO0FBQUE7QUFGZ0IsT0FBcEI7QUFJQSxVQUFJTixhQUFhVixNQUFNaUIsY0FBdkIsRUFBdUM7QUFDckNGLHdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWhCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJSixRQUFULElBQW9CWCxNQUFNWSxNQUExQixFQUFrQztBQUNoQyxZQUFJYixPQUFPWSxRQUFYLEVBQW9CO0FBQ2xCLGNBQUlFLFNBQVFiLE1BQU1ZLE1BQU4sQ0FBYUQsUUFBYixDQUFaO0FBQ0FQLGtCQUFRQyxHQUFSLENBQVlRLE9BQU1LLElBQWxCO0FBQ0EsaUJBQU87QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUUsc0RBQU0sU0FBUSxPQUFkLEdBRkY7QUFHRSxzREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUI7QUFIRixhQURLO0FBTUwsNkRBQU8sT0FBT2xCLEtBQWQsRUFBcUIsV0FBV2EsT0FBTUssSUFBdEMsRUFBNEMsTUFBTUwsT0FBTUMsSUFBTixJQUFjLGlCQUFoRSxFQUFtRixLQUFLZixHQUF4RixHQU5LO0FBT0pnQjtBQVBJLFdBQVA7QUFTRDtBQUNGO0FBQ0QsYUFBTyxLQUFLTixXQUFMLEVBQVA7QUFDRDs7O2tDQUVhO0FBQ1o7QUFDQSxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOzs7RUE5RDBCLGdCQUFNVSxTIiwiZmlsZSI6ImV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWFuYTEvdGVhbmRiaXNjdWl0cy9zZXJ2ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZXZlbnQnO1xuaW1wb3J0IGdldEV2ZW50IGZyb20gJy4uL2xpYi9nZXQtZXZlbnQnO1xuaW1wb3J0IHNldFJTVlAgZnJvbSAnLi4vbGliL3NldC1yc3ZwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeTogeyBpZCwgdUlkIH0gfSkge1xuICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgZ2V0RXZlbnQoaWQpO1xuICAgIHJldHVybiB7IGV2ZW50LCBpZCwgdUlkIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByc3ZwKGJ1dHRvbikge1xuICAgIGNvbnNvbGUubG9nKGJ1dHRvbi50YXJnZXQudmFsdWUpO1xuICAgIGxldCByZXNwb25zZSA9IGJ1dHRvbi50YXJnZXQudmFsdWUgPyBcImF0dGVuZGluZ1wiIDogXCJkZWNsaW5lZFwiO1xuICAgIHNldFJTVlAodGhpcy5wcm9wcy5pZCwgdGhpcy5wcm9wcy51SWQsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV2ZW50LCB1SWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JTY3JlZW4oKTtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCBsZXQncyBmaW5kIG91dCBpZiB0aGUgbWF4aW11bSBndWVzdCBpcyByZWFjaGVkXG4gICAgbGV0IGF0dGVuZGluZyA9IDA7XG4gICAgZm9yIChsZXQgZ3Vlc3RJZCBpbiBldmVudC5ndWVzdHMpIHtcbiAgICAgIGxldCBndWVzdCA9IGV2ZW50Lmd1ZXN0c1tndWVzdElkXTtcbiAgICAgIGlmIChndWVzdC5yc3ZwID09PSBcImF0dGVuZGluZ1wiKSB7XG4gICAgICAgIGF0dGVuZGluZyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhY3Rpb25CdXR0b25zID0gPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgIDxidXR0b24gdmFsdWU9e3RydWV9IG9uQ2xpY2s9e3RoaXMucnN2cC5iaW5kKHRoaXMpfT5ZZXMgSSB3aWxsIGF0dGVuZCE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB2YWx1ZT17ZmFsc2V9IG9uQ2xpY2s9e3RoaXMucnN2cC5iaW5kKHRoaXMpfT5ObyBJIGNhbid0IG1ha2UgaXQgOig8L2J1dHRvbj5cbiAgICAgIDwvZGl2PjtcbiAgICBpZiAoYXR0ZW5kaW5nID49IGV2ZW50Lm1heGltdW1fZ3Vlc3RzKSB7XG4gICAgICBhY3Rpb25CdXR0b25zID0gPGRpdj5Tb3JyeSwgdGhpcyBldmVudCBpcyBmdWxsISBOZXh0IHRpbWUgY2hlY2sgZmFzdGVyITwvZGl2PjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBndWVzdElkIGluIGV2ZW50Lmd1ZXN0cykge1xuICAgICAgaWYgKHVJZCA9PSBndWVzdElkKSB7XG4gICAgICAgIGxldCBndWVzdCA9IGV2ZW50Lmd1ZXN0c1tndWVzdElkXTtcbiAgICAgICAgY29uc29sZS5sb2coZ3Vlc3QubmFtZSk7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRlYSAmIEJpc2N1aXRzIEV2ZW50IFJlc3BvbnNlIFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPEV2ZW50IGV2ZW50PXtldmVudH0gZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfSByc3ZwPXtndWVzdC5yc3ZwIHx8IFwiTm90IFlldCBSZXBsaWVkXCJ9IHVJZD17dUlkfSAvPlxuICAgICAgICAgIHthY3Rpb25CdXR0b25zfVxuICAgICAgICA8L2Rpdj47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVycm9yU2NyZWVuKCk7XG4gIH1cblxuICBlcnJvclNjcmVlbigpIHtcbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIDxkaXY+IE9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nISA8L2Rpdj47XG4gIH1cbn1cbiJdfQ==