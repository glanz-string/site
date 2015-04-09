var MailForm = React.createClass({displayName: "MailForm",
	mixins: [Backbone.React.Component.mixin],
	componentWillMount: function () {
		this.props.model.initAll();
		this.props.model.getToken();
	},
	render: function () {
		var buttonDisabled = ( (this.props.model.get("mailSending")) || (!this.props.model.get("tokenGotten")) ) ? "disabled": "";
		var reconnectButton = React.createElement("a", {href: "javascript:void(0)", onClick:  this.getToken}, "サーバーに再接続")

		return (
React.createElement("div", null, 
React.createElement("p", null, this.props.model.get("textStatus"), " ", React.createElement("span", {className: "ml-20px"},  this.props.model.get("tokenGotten") ? "" : reconnectButton)), 
React.createElement("form", {onSubmit: this.onSubmit}, 
React.createElement("input", {value: this.props.model.get("address"), onChange: this.setAddress}), React.createElement("br", null), 
React.createElement("textarea", {value: this.props.model.get("message"), onChange: this.setMessage}), 
React.createElement("input", {type: "button", value: "送信", onClick: this.sendMail, disabled:  buttonDisabled }), React.createElement("br", null), React.createElement("br", null)
), 
this.props.model.get("address")
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
	},
	onSubmit: function (e) {
		e.preventDefault();
	},
	getToken: function () {
		this.props.model.getToken();
	}
});