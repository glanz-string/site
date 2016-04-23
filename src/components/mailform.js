import React from 'react'
import request from 'superagent'

const TOKEN_TO_GET_TOKEN = 'GET_TOKEN'
//const API_URL = 'http://glanz.s602.xrea.com/php/sendmailtest.php'
const API_URL = 'http://glanz.s602.xrea.com/php/sendmail.php'
var subject = 'Tickets　from glanz.s602.xrea.com'

export default class MailForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      token: "",
      address: "",
      message: "",
      subject: subject,
      tokenGotten: false,
      mailSending: false,
      textStatus: "",
      status: true,
    }
  }
  componentWillMount() {
    //this.props.model.reset();
  }
  componentDidMount() {
    this._getToken()
  }
  render() {
    var buttonDisabled = ( (this.state.mailSending) || (!this.state.tokenGotten) ) ? "disabled": "";

    var reconnectLink = this.state.tokenGotten ? null : <a href="javascript:void(0)" onClick={ this.getToken() }>サーバーに再接続</a>;

    var statusBarClass = this.state.status ? "status" : "status-error";
    var statusBar = this.state.textStatus ?
      (<p className={statusBarClass}>{this.state.textStatus } <span className="ml-20px">{ reconnectLink }</span></p>)
      : null;


    return (
      <div className="mailform mt-1em">
        <form onSubmit={this.onSubmit} className="mt-1em">
          <label>メールアドレス<br /><input value={this.state.address} onChange={this.setAddress()}/></label>
          <label>本文<br /><textarea value={this.state.message} onChange={this.setMessage()}></textarea></label>
          <div className="mt-1em"><span className="submit-button"><button onClick={this.sendMail()} disabled={ buttonDisabled }>送信</button></span> {statusBar}</div>
        </form>
      </div>
    );
  }
  setAddress(e) {
    return (e) => {
      this.setState({ address: e.target.value })
    }
  }
  setMessage(e) {
    return (e) => {
      this.setState({ message: e.target.value });
    }
  }
  onSubmit(e) {
    return (e) => {
      e.preventDefault()
    }
  }
  getToken() {
    return () => {
      this._getToken()
    }
  }
  sendMail() {
    return () => {
      this._sendMail()
    }
  }
  _getToken(_setStatus) {
    var setStatus = _setStatus === undefined ? true : _setStatus;
    request
      .post(API_URL)
      .type('form')
      .send({ token: TOKEN_TO_GET_TOKEN })
      .end((err,res) => {
        err ? error() : success(res.body)
      });
    var success = (data) => {
      if (setStatus) {
        this.setState({
          token: data['token'],
          tokenGotten: true,
          textStatus: "",
          status: true
        })
      } else {
        this.setState({
          token: data['token'],
          tokenGotten: true,
        });
      }
    }
    var error = () => {
      this.setState({
        token: "",
        tokenGotten: false,
        textStatus: "サーバーへのアクセスに失敗",
        status: false
      })
    }
  }
  _sendMail() {
    if (!this.state.tokenGotten) {
      return 0
    }
    this.setState({
      textStatus: "送信中",
      status: true,
      mailSending: true
    })
    request
      .post(API_URL)
      .type('form')
      .send({
        token: this.state.token,
        address: this.state.address,
        message: this.state.message,
        subject: this.state.subject
      })
      .end((err,res) => {
        err ? error() : success(res.body)
      })
      
    var success = (data) => {
      console.log("success to access to php: " + data.status)

//      this._getToken(false)

      var status

      if (data.success) {
        this.clearMail()
        status = true
      } else {
        status = false
      }

      this.setState({
        mailSending: false,
        textStatus: data.status,
        status: status
      })

    }
    var error = () => {
      console.log("failed to access to php: " + textStatus)

      this.setState({
        mailSending: false,
        textStatus: "サーバーへのアクセスに失敗。再送信してください。",
        status: false
      })
    }
    
  }
  clearMail() {
    this.setState({
      address: "",
      message: "",
      subject: subject,
    })
  }

}
