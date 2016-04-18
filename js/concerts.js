var Concerts = React.createClass({displayName: "Concerts",
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
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/concerts.png"})), 
  React.createElement("hr", null), 
   this.state.concerts.length > 0 ? this.state.concerts.map(function (concert) {
    var date = new Date(concert.attributes['date']);
    var now = new Date();
    return (
      React.createElement("div", null, 
        React.createElement("article", {className: "concert mt-10px"}, 
          React.createElement("div", {className: "column2-left"}, 
            React.createElement("p", {className: "title mt-10px"},  concert.attributes['post_title'],  now.getTime() < date.getTime() ? '' : React.createElement("span", {className: "past ml-40px"}, "終了")), 
            React.createElement("p", {className: "info mt-20px"}, 
             date.getFullYear(), "年",  date.getMonth()+1, "月",  date.getDate(), "日　", concert.attributes['opening_time'], "開場　",  concert.attributes['start_time'], "開演", React.createElement("br", null), 
             concert.attributes['place'], React.createElement("br", null), 
            React.createElement("br", null), 
            React.createElement("span", {dangerouslySetInnerHTML: { __html: concert.attributes['post_content'].replace(/\n/g,'<br />')}})
            ), 
             now.getTime() < date.getTime() ? React.createElement("button", {className: "mt-2em ml-10px", onClick: this.onClick}, "チケットはこちら") : ''
            
          ), 
          React.createElement("div", {className: "column2-right images"}, 
             (concert.attributes['image1']) ?
              React.createElement(Thumbnail, {src:  concert.attributes['image1'], largeImageSrc:  concert.attributes['image1'], alt: "パンフレット"})
            : '', 
             (concert.attributes['image2']) ?
              React.createElement(Thumbnail, {src:  concert.attributes['image2'], largeImageSrc:  concert.attributes['image2'], alt: "パンフレット"})
            : ''
          )
        ), 
        React.createElement("hr", null)
      )
    )
  }.bind(this)) : 
    React.createElement("div", {className: "loading"})
  

), 
React.createElement(Footer, null)
)
		);
	}
});
