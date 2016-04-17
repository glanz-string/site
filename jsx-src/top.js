var Top = React.createClass({
	onClick: function () {
		Backbone.history.navigate("tickets",true);
	},
	render: function () {
		console.log("index rendered");
		return(
<div className="top-body-wrap">
<Header />
<Ad />
<article className="top-info">
<p>
<Thumbnail src="/images/concerts/3_1small.jpg" largeImageSrc="/images/concerts/3_1.jpg" style={{ width: "400px", height: "auto" }} />
<button className="top-info-button mt-1em" onClick={this.onClick}>チケットはこちら</button>
  </p>
</article>
</div>
		);
	}
});
