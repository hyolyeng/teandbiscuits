webpackHotUpdate(1,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(35);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(33);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	exports.transform = transform;
	
	var _db = __webpack_require__(97);
	
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2V0LWV2ZW50LmpzP2YwM2MiXSwibmFtZXMiOlsidHJhbnNmb3JtIiwiaWQiLCJjaGlsZCIsIm9uY2UiLCJldmVudCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWF4aW11bV9ndWVzdHMiLCJtaW5pbXVtX2d1ZXN0cyIsInBsYWNlIiwidGltZSIsIkRhdGUiLCJndWVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrQmdCQSxTLEdBQUFBLFM7O0FBbEJoQjs7Ozs7Ozt5RUFFZSxpQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNNLGFBQ2hCQyxLQURnQixDQUNWLFFBRFUsRUFFaEJBLEtBRmdCLENBRVZELEVBRlUsRUFHaEJFLElBSGdCLENBR1gsT0FIVyxDQUROOztBQUFBO0FBQ1JDLGtCQURRO0FBS1BDLGdCQUxPLEdBS0RELE1BQU1DLEdBQU4sRUFMQzs7QUFNYkMscUJBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxxQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUQscUJBQVFDLEdBQVIsQ0FBWUgsTUFBTUMsR0FBTixFQUFaOztBQVJhLGtCQVNUQSxHQVRTO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQVVKTCxVQUFVSyxHQUFWLENBVkk7O0FBQUE7QUFBQSw4Q0FZSixJQVpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEk7Ozs7Ozs7QUFnQlIsVUFBU0wsU0FBVCxDQUFtQkssR0FBbkIsRUFBd0I7QUFDN0IsVUFBTztBQUNMSixTQUFJSSxJQUFJSixFQURIO0FBRUxPLFdBQU1ILElBQUlHLElBRkw7QUFHTEMscUJBQWdCSixJQUFJSSxjQUhmO0FBSUxDLHFCQUFnQkwsSUFBSUssY0FKZjtBQUtMQyxZQUFPTixJQUFJTSxLQUxOO0FBTUxDLFdBQU0sSUFBSUMsSUFBSixDQUFTUixJQUFJTyxJQUFKLEdBQVcsSUFBcEIsQ0FORDtBQU9MRSxhQUFRVCxJQUFJUztBQVBQLElBQVA7QUFTRCIsImZpbGUiOiIxLjFiYmI3NWU5OTBmZmY2ZjRhMjRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpZCkgPT4ge1xuXHRjb25zdCBldmVudCA9IGF3YWl0IGRiXG4gICAgLmNoaWxkKCdldmVudHMnKVxuICAgIC5jaGlsZChpZClcbiAgICAub25jZSgndmFsdWUnKTtcbiAgY29uc3QgdmFsID0gZXZlbnQudmFsKCk7XG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgY29uc29sZS5sb2coXCIqKioqKlwiKTtcbiAgY29uc29sZS5sb2coZXZlbnQudmFsKCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybSh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbCkge1xuICByZXR1cm4ge1xuICAgIGlkOiB2YWwuaWQsXG4gICAgbmFtZTogdmFsLm5hbWUsXG4gICAgbWF4aW11bV9ndWVzdHM6IHZhbC5tYXhpbXVtX2d1ZXN0cyxcbiAgICBtaW5pbXVtX2d1ZXN0czogdmFsLm1pbmltdW1fZ3Vlc3RzLFxuICAgIHBsYWNlOiB2YWwucGxhY2UsXG4gICAgdGltZTogbmV3IERhdGUodmFsLnRpbWUgKiAxMDAwKSxcbiAgICBndWVzdHM6IHZhbC5ndWVzdHNcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2dldC1ldmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=