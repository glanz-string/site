Ad = React.createClass({displayName: "Ad",
	getInitialState: function () {
		return {
			adHtml: ''
		};
	},
	componentDidMount: function () {

// 		$.get("/react-backbone/get_ad.php", (function (data) {
// console.log(data);
// console.log(this.refs)
// var iFrameNode = this.refs.myIframe;
// frameDoc = React.findDOMNode(iFrameNode).contentWindow.document;
// frameDoc.write(data);


// 			// this.setState(function (state,props) {
// 			// 	return {
// 			// 		adHtml: data
// 			// 	}
// 			// });
// 		}).bind(this));

	},
// 	render: function () {

// 		return (
// <section className="xrea-ad mt-20px" dangerouslySetInnerHTML={{ __html: this.state.adHtml }} />
// 		);
// 	}

	render: function () {

		return (
React.createElement("section", {className: "xrea-ad mt-20px"}, 
React.createElement("iframe", {scrolling: "no", src: "http://img.xrea.com/ad_iframe.fcg?site=glanz.s602.xrea.com"}
)
)
		);
	}

// render: function() {

//     return (
// <section className="xrea-ad mt-20px">
// <iframe ref="myIframe" />
// </section>
//     );
// }



});