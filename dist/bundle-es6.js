(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _top = require('./components/top');

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./components/top":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Top = exports.Top = function () {
	function Top() {
		_classCallCheck(this, Top);
	}

	_createClass(Top, [{
		key: "onClick",
		value: function onClick() {
			Backbone.history.navigate("tickets", true);
		}
	}]);

	return Top;
}();
//var Top = React.createClass({
//	onClick: function () {
//		Backbone.history.navigate("tickets",true);
//	},
//	render: function () {
//		console.log("index rendered");
//		return(
//<div className="top-body-wrap">
//<Header />
//<Ad />
//<article className="top-info">
//<p>
//<Thumbnail src="/images/concerts/3_1small.jpg" largeImageSrc="/images/concerts/3_1.jpg" style={{ width: "400px", height: "auto" }} />
//<button className="top-info-button mt-1em" onClick={this.onClick}>チケットはこちら</button>
//  </p>
//</article>
//</div>
//		);
//	}
//});

},{}]},{},[1]);
