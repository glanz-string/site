var MailForm = React.createClass({displayName: "MailForm",
	mixins: [Backbone.React.Component.mixin],
	componentWillMount: function () {
		this.props.model.initAll({
			subject: "チケット申し込み　from glanz.s602.xrea.com",
			fixSubject: true
		});
		this.props.model.getToken();
	},
	render: function () {
		var buttonDisabled = ( (this.props.model.get("mailSending")) || (!this.props.model.get("tokenGotten")) ) ? "disabled": "";

		var reconnectLink = this.props.model.get("tokenGotten") ? null : React.createElement("a", {href: "javascript:void(0)", onClick:  this.getToken}, "サーバーに再接続");

		var statusBarClass = this.props.model.get("status")? "status" : "status-error";
		var statusBar = this.props.model.get("textStatus") ?
			(React.createElement("p", {className: statusBarClass}, this.props.model.get("textStatus"), " ", React.createElement("span", {className: "ml-20px"},  reconnectLink )))
			: null;


		return (
React.createElement("div", {className: "mailform mt-1em"}, 
  React.createElement("form", {onSubmit: this.onSubmit, className: "mt-1em"}, 
    React.createElement("label", null, "メールアドレス", React.createElement("br", null), React.createElement("input", {value: this.props.model.get("address"), onChange: this.setAddress})), 
    React.createElement("label", null, "本文", React.createElement("br", null), React.createElement("textarea", {value: this.props.model.get("message"), onChange: this.setMessage})), 
    React.createElement("div", {className: "mt-1em"}, React.createElement("span", {className: "submit-button"}, React.createElement("button", {onClick: this.sendMail, disabled:  buttonDisabled }, "送信")), " ", statusBar)
  )
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