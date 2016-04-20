var Ad = React.createClass({displayName: "Ad",
	getInitialState: function () {
		return {
			adHtml: ''
		};
	},
	componentDidMount: function () {
    var adBoxElement = this.refs.adBox.getDOMNode();

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
	},

	render: function () {

		return (
      React.createElement("section", {className: "xrea-ad mt-20px", ref: "adBox"})
		);
	}
});
