var MailForm = React.createClass({displayName: "MailForm",
	mixins: [Backbone.React.Component.mixin],
	componentDidMount: function () {
		this.props.model.getToken(null,null);
	},
	render: function () {
		return (
React.createElement("div", null, 
React.createElement("form", null, 
React.createElement("input", {onChange: this.setAddress}), React.createElement("br", null), 
React.createElement("textarea", {onChange: this.setMessage}), 
React.createElement("input", {type: "submit", value: "送信"}), React.createElement("br", null), React.createElement("br", null)
), 
this.props.model.get("hostUrl"), React.createElement("br", null), 

this.props.model.get("token")
)
		);
	},
	setAddress: function (e) {
		this.props.model.set("address", e.target.value);
	},
	setMessage: function (e) {
		this.props.model.set("message", e.target.value);
	}
});