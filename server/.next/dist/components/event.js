"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("/Users/diana1/teandbiscuits/server/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var event = _ref.event,
      guestName = _ref.guestName,
      rsvp = _ref.rsvp,
      uId = _ref.uId;
  return _react2.default.createElement(
    "div",
    { className: "event" },
    _react2.default.createElement(
      "p",
      null,
      "Hi ",
      guestName,
      "!"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Diana",
      " has invited you to her event:"
    ),
    _react2.default.createElement(
      "p",
      null,
      event.name
    ),
    _react2.default.createElement(
      "p",
      null,
      "Place: ",
      event.place
    ),
    _react2.default.createElement(
      "p",
      null,
      "Your response: ",
      rsvp
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXZlbnQuanMiXSwibmFtZXMiOlsiZXZlbnQiLCJndWVzdE5hbWUiLCJyc3ZwIiwidUlkIiwibmFtZSIsInBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBQWU7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxTQUFWLFFBQVVBLFNBQVY7QUFBQSxNQUFxQkMsSUFBckIsUUFBcUJBLElBQXJCO0FBQUEsTUFBMkJDLEdBQTNCLFFBQTJCQSxHQUEzQjtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBT0YsZUFBUDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJLGFBQUo7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSUQsWUFBTUk7QUFBVixLQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBV0osWUFBTUs7QUFBakIsS0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQW1CSDtBQUFuQjtBQUxGLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWFuYTEvdGVhbmRiaXNjdWl0cy9zZXJ2ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBldmVudCwgZ3Vlc3ROYW1lLCByc3ZwLCB1SWQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgPHA+SGkge2d1ZXN0TmFtZX0hPC9wPlxuICAgIDxwPntcIkRpYW5hXCJ9IGhhcyBpbnZpdGVkIHlvdSB0byBoZXIgZXZlbnQ6PC9wPlxuICAgIDxwPntldmVudC5uYW1lfTwvcD5cbiAgICA8cD5QbGFjZToge2V2ZW50LnBsYWNlfTwvcD5cbiAgICA8cD5Zb3VyIHJlc3BvbnNlOiB7cnN2cH08L3A+XG4gIDwvZGl2PlxuKTsiXX0=