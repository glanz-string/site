var Thumbnail = React.createClass({displayName: "Thumbnail",
	getInitialState: function () {
		return { expand: false };
	},
	onClick: function () {
		this.setState(function (state,props) {
			state.expand = !state.expand;
		});
	},
	render: function () {
		var cssClass;
		console.log(this.state.expand)
		if (this.state.expand) {
			document.body.style.overflow = "hidden";
			cssClass = "window thumbnail-show";
		} else {
			document.body.style.overflow = "auto";
			cssClass = "window thumbnail-hide";
		}
			return(
React.createElement("div", {className: "thumbnail"}, 
	React.createElement("img", {src: this.props.src, alt:  this.props.alt || "", onClick:  this.onClick}), 
	React.createElement("div", {className: cssClass}, 
		React.createElement("img", {src: this.props.src, alt:  this.props.alt || "", onClick:  this.onClick}), 
		React.createElement("span", {className: "close-button", onClick:  this.onClick})
	)
)

			);


	}

})