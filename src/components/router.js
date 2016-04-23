import React from 'react'

export var Router = React.createClass({
	getInitialState: function () {
		return {
			current: {
//				className: null,
				class: null,
				params: null,
				attrs: null
			}
		};
	},
	getDefaultProps: function() {
		return {
			router: { instance: null }
		};
	},
	componentWillMount: function () {
		var routerProps = { routes: {} };
		React.Children.forEach(this.props.children, (function (child,i) {
      if(child.type.displayName == "Content") {
  			var funcName = "f" + i;
  
  			var routes = {};
  			routes[child.props.path] = funcName;
  			_.extend(routerProps.routes,routes);
  
  			var routerFunc = {};
  			routerFunc[funcName] = (function () {
  				var params = arguments;
  				this.setState((function (state,props) {
  					// this = child
  					state.current.attrs = {};
  					_.extend(state.current.attrs, this.props);
  
  //					state.current.className = this.props.reactClass;
  					state.current.class = this.props.reactClass;
  					if (params) {
  						state.current.params = Array.prototype.slice.call(params);
  						_.extend(state.current.attrs, {params: params});
  					} else {
  						state.current.params = null;
  					}
  
  					_.extend(state.current.attrs, {router: props.router.instance});
  
  				}).bind(child));
  			}).bind(this);
  
  			_.extend(routerProps,routerFunc);
      }
		}).bind(this));

		var routerClass = Backbone.Router.extend(routerProps);
		this.props.router.instance = new routerClass;

		var historyOptions = {};
		if (this.props.pushState) {
			_.extend(historyOptions, {pushState: this.props.pushState});
		}
		if (this.props.hashChange) {
			_.extend(historyOptions, {hashChange: this.props.hashChange});
		}
		if (this.props.root) {
			_.extend(historyOptions, {root: this.props.root});
		}

		Backbone.history.start(historyOptions);
	},
	render: function () {
//		var global = new Function("return this")();
//		if (this.state.current.className == null) {
		if (this.state.current.class == null) {
			return (<div></div>);
		} else {
//			return React.createElement(global[this.state.current.className], this.state.current.attrs);
			return React.createElement(this.state.current.class, this.state.current.attrs);
		}
	},
});

export var Content = React.createClass({
	render: (<div></div>)
});

export var A = React.createClass({
	onClick: function () {
		Backbone.history.navigate(this.props.href,true);
	},
	render: function () {
		return (<a href="javascript:void(0)" onClick={this.onClick}>{this.props.children}</a>)
	}
});

//  <Router (pushState={true/false}) (root="Root path") (hashChange={true/false}) >
// 		<Content path="path" className="React class name" />
//  		.
//  		.
//  		.
//  </Router>