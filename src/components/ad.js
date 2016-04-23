import React from 'react'
import ReactDOM from 'react-dom'

export default class Ad extends React.Component {
  constructor(props) {
    super(props)
    this.state = { adHtml: '' }
  }
  componentDidMount() {
    var adBoxElement = ReactDOM.findDOMNode(this.refs.adBox);

    var documentOpenFunc = document.open;
    var documentWriteFunc = document.write;

    document.open = function (){};
    document.write = function(string) {
      adBoxElement.innerHTML += string;
    };

    var adScriptElement = document.createElement('script');
    adScriptElement.type = "text\/javascript";
    adScriptElement.src = "http://imgj.xrea.com/xa.j?site=glanz.s602.xrea.com";
    adScriptElement.addEventListener('load', function () {
      document.open = documentOpenFunc;
      document.write = documentWriteFunc;
    },false);
    adBoxElement.appendChild(adScriptElement);
  }

  render() {
    return (
      <section className="xrea-ad mt-20px" ref="adBox"></section>
    );
  }
}
