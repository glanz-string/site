var MailForm = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	componentWillMount: function () {
		this.props.model.reset();
	},
	render: function () {
		var buttonDisabled = ( (this.props.model.get("mailSending")) || (!this.props.model.get("tokenGotten")) ) ? "disabled": "";

		var reconnectLink = this.props.model.get("tokenGotten") ? null : <a href="javascript:void(0)" onClick={ this.getToken }>サーバーに再接続</a>;

		var statusBarClass = this.props.model.get("status")? "status" : "status-error";
		var statusBar = this.props.model.get("textStatus") ?
			(<p className={statusBarClass}>{this.props.model.get("textStatus")} <span className="ml-20px">{ reconnectLink }</span></p>)
			: null;


		return (
<div className="mailform mt-1em">
  <form onSubmit={this.onSubmit} className="mt-1em">
    <label>メールアドレス<br /><input value={this.props.model.get("address")} onChange={this.setAddress}/></label>
    <label>本文<br /><textarea value={this.props.model.get("message")} onChange={this.setMessage}></textarea></label>
    <div className="mt-1em"><span className="submit-button"><button onClick={this.sendMail} disabled={ buttonDisabled }>送信</button></span> {statusBar}</div>
  </form>
</div>
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