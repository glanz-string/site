var MailForm = React.createClass({displayName: "MailForm",
	mixins: [Backbone.React.Component.mixin],
	componentWillMount: function () {
		this.props.model.getToken();
	},
	render: function () {
		return (
React.createElement("div", null, 
this.props.model.get("textStatus"), 
React.createElement("form", null, 
React.createElement("input", {onChange: this.setAddress}), React.createElement("br", null), 
React.createElement("textarea", {onChange: this.setMessage}), 
React.createElement("input", {type: "button", value: "送信", onClick: this.sendMail}), React.createElement("br", null), React.createElement("br", null)
), 
this.props.model.get("token")
)
		);
	},
	setAddress: function (e) {
		this.props.model.set("address", e.target.value);
	},
	setMessage: function (e) {
		this.props.model.set("message", e.target.value);
	},
	sendMail: function () {
		this.props.model.sendMail();
	}
});