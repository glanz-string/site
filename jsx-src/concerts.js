var Concerts = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function () {
    return {concerts: []};
  },
  onClick: function () {
    Backbone.history.navigate("tickets",true);
  },
  componentWillMount: function () {
    concerts.fetch({
      success: function (collection) {
        this.setState(function (state,props) {
          state.concerts = collection;
        });
      }.bind(this)
    });
  },
	render: function () {
		return(
<div className="body-wrap">
<Header />
<Ad />
<section className="content mt-30px">
  <h1><img src="images/concerts.png" /></h1>
  <hr />
  { this.state.concerts.length > 0 ? this.state.concerts.map(function (concert) {
    var date = new Date(concert.attributes['date']);
    var now = new Date();
    return (
      <div>
        <article className="concert mt-10px">
          <div className="column2-left">
            <p className="title mt-10px">{ concert.attributes['post_title'] }{ now.getTime() < date.getTime() ? '' : <span className='past ml-40px'>終了</span> }</p>
            <p className="info mt-20px">
            { date.getFullYear() }年{ date.getMonth()+1 }月{ date.getDate()}日　{concert.attributes['opening_time'] }開場　{ concert.attributes['start_time'] }開演<br />
            { concert.attributes['place'] }<br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: concert.attributes['post_content'].replace(/\n/g,'<br />') }} />
            </p>
            { now.getTime() < date.getTime() ? <button className="mt-2em ml-10px" onClick={this.onClick}>チケットはこちら</button> : '' }
            
          </div>
          <div className="column2-right images">
            { (concert.attributes['image1']) ?
              <Thumbnail src={ concert.attributes['image1'] } largeImageSrc={ concert.attributes['image1'] } alt="パンフレット" />
            : '' }
            { (concert.attributes['image2']) ?
              <Thumbnail src={ concert.attributes['image2'] } largeImageSrc={ concert.attributes['image2'] } alt="パンフレット" />
            : '' }
          </div>
        </article>
        <hr />
      </div>
    )
  }.bind(this)) : 
    <div className='loading'></div> 
  }

</section>
<Footer />
</div>
		);
	}
});
