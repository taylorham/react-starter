/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _StatelessComponent = __webpack_require__(3);

	var _StatefulComponent = __webpack_require__(4);

	var _StatefulComponent2 = _interopRequireDefault(_StatefulComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This boilerplate code is required at the start of all React components.


	// We're using ReactDOM to manage the rendering of our app.


	// Any components we create must be required at the top of the document.
	// If the component is not the 'default' export from its file, we have to wrap the
	// component name in curly braces for proper import.


	// ES6 syntax for defining a STATEFUL React component.
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main() {
	    _classCallCheck(this, Main);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }

	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_StatelessComponent.HelloMessage, { name: 'World' }),
	        _react2.default.createElement(_StatefulComponent2.default, null)
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	// The 'Main' class takes care of rendering our entire app. We use ReactDOM to manage this.
	// In the render() function, we must specify the React component we wish to render as well
	// as the html node it will inhabit in our public/index.html file.


	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HelloMessage = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ES6 syntax for defining a STATELESS React component with arrow function. If properties are
	// passed to the component, they must be declared as an argument to the function declaration.
	var HelloMessage = exports.HelloMessage = function HelloMessage(props) {
	  return _react2.default.createElement(
	    "h1",
	    { className: "text-center" },
	    "Hello ",
	    props.name
	  );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// All STATEFUL components must be constructed with the React.createClass function.
	// Unlike ES5, we can select the component for export at its definition. If it is the
	// only component we're exporting from the file, we export it with the flag 'default'.
	var Field = function (_React$Component) {
	  _inherits(Field, _React$Component);

	  // In order to track state in this component, we must define a constructor function
	  // which can optionally take an argument of any (props) provided to the component.
	  // This component will have ownership of properties, and will store them in its 'state'.
	  // This state will enable us to display and edit values for the component within our app.
	  function Field() {
	    _classCallCheck(this, Field);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this));
	    // Always set super() so that we have access to 'this' in our component for binding.


	    _this.state = {
	      text: 'Type in the box above!'
	    };
	    // Any custom functions defined by the component must be bound in it's constructor for
	    // proper access to it's state with 'this'.
	    _this.update = _this.update.bind(_this);
	    return _this;
	  }
	  // This is a custom function that we have defined and will apply to our text field
	  // in order to be able to update the state of our component immediately when it changes.


	  _createClass(Field, [{
	    key: 'update',
	    value: function update(e) {
	      // setState must be called on 'this' and requires an object for its parameter.
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('input', { className: 'center-block', type: 'text', onChange: this.update }),
	        _react2.default.createElement(
	          'h2',
	          { className: 'text-center' },
	          this.state.text
	        )
	      );
	    }
	  }]);

	  return Field;
	}(_react2.default.Component);

	exports.default = Field;

/***/ }
/******/ ]);