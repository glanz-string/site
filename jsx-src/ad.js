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
<script type="text/javascript" src="http://imgj.xrea.com/xa.j?site=glanz.s602.xrea.com"></script>
<noscript><iframe height="60" width="468" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" allowtransparency="true" src="http://img.xrea.com/ad_iframe.fcg?site=glanz.s602.xrea.com"><a href="http://img.xrea.com/ad_click.fcg?site=glanz.s602.xrea.com" target="_blank"><img src="http://img.xrea.com/ad_img.fcg?site=glanz.s602.xrea.com" border="0" alt="xreaad" /></a></iframe></noscript>
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
