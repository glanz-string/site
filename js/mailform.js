var MailForm = React.createClass({displayName: "MailForm",
	mixins: [Backbone.React.Component.mixin],
	componentWillMount: function () {
		this.props.model.initAll();
		this.props.model.getToken();
	},
	render: function () {
		var buttonDisabled = ( (this.props.model.get("mailSending")) || (!this.props.model.get("tokenGotten")) ) ? "disabled": "";
		var reconnectButton = React.createElement("a", {href: "javascript:void(0)", onClick:  this.getToken}, "サーバーに再接続")
		var status = this.props.model.get("status")? "status" : "status-error";

		return (
React.createElement("div", {className: "mailform mt-2em ml-1em"}, 
  React.createElement("p", {className: status}, this.props.model.get("textStatus"), " ", React.createElement("span", {className: "ml-20px"},  this.props.model.get("tokenGotten") ? reconnectButton : reconnectButton)), 
  React.createElement("form", {onSubmit: this.onSubmit, className: "mt-1em"}, 
    React.createElement("label", null, "メールアドレス", React.createElement("br", null), React.createElement("input", {value: this.props.model.get("address"), onChange: this.setAddress})), 
    React.createElement("label", null, "本文", React.createElement("br", null), React.createElement("textarea", {value: this.props.model.get("message"), onChange: this.setMessage})), 
    React.createElement("button", {onClick: this.sendMail, disabled:  buttonDisabled }, "送信"), React.createElement("br", null)
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