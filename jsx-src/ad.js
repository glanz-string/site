Ad = React.createClass({
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
<section className="xrea-ad mt-20px">
<iframe scrolling="no" src="http://img.xrea.com/ad_iframe.fcg?site=glanz.s602.xrea.com">
</iframe>
</section>
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