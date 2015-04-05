var Concerts = React.createClass({displayName: "Concerts",
	render: function () {
    console.log(this.props.params)
		console.log("concerts rendered");
		return(
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("section", {className: "content mt-30px"}, 

  React.createElement("h1", null, React.createElement("img", {src: "images/concerts.png"})), 
  React.createElement("hr", null), 
  React.createElement("article", {className: "concert mt-10px"}, 
    React.createElement("div", {className: "column2-left"}, 
      React.createElement("p", {className: "title mt-10px"}, "第2回演奏会", 
      React.createElement("span", {className: "past ml-40px"}, "終了")), 
      React.createElement("p", {className: "info mt-20px"}, "2015年5月31日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市緑区民文化センター", React.createElement("br", null), 
React.createElement("br", null), 
"モーツァルト/交響曲第41番”ジュピター”", React.createElement("br", null), 
"ハイドン/弦楽四重奏曲第1番 op.1-1", React.createElement("br", null), 
"カリンニコフ/セレナーデ", React.createElement("br", null), 
"チャイコフスキー/フィレンツェの想い出", React.createElement("br", null)

      )
    )
  ), 
  React.createElement("hr", null), 
  React.createElement("article", {className: "concert mt-10px"}, 
    React.createElement("div", {className: "column2-left"}, 
      React.createElement("p", {className: "title mt-10px"}, "第2回演奏会"), 
      React.createElement("p", {className: "info mt-20px"}, "2015年5月31日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市緑区民文化センター", React.createElement("br", null), 
React.createElement("br", null), 
"モーツァルト/交響曲第41番”ジュピター”", React.createElement("br", null), 
"ハイドン/弦楽四重奏曲第1番 op.1-1", React.createElement("br", null), 
"カリンニコフ/セレナーデ", React.createElement("br", null), 
"チャイコフスキー/フィレンツェの想い出", React.createElement("br", null)
      ), 
      React.createElement("button", {className: "mt-2em ml-10px"}, "チケットはこちら")
    ), 
    React.createElement("div", {className: "column2-right images"}, 
      React.createElement("img", {src: "81VDaop7qIL._SL290_.jpg"}), 
      React.createElement("img", {src: "Kalinnikov2.jpg"})
    )
  ), 
  React.createElement("hr", null), 
  React.createElement("article", {className: "concert mt-10px"}, 
    React.createElement("div", {className: "column2-left"}, 
      React.createElement("p", {className: "title mt-10px"}, "第2回演奏会"), 
      React.createElement("p", {className: "info mt-20px"}, "2015年5月31日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市緑区民文化センター", React.createElement("br", null), 
React.createElement("br", null), 
"モーツァルト/交響曲第41番”ジュピター”", React.createElement("br", null), 
"ハイドン/弦楽四重奏曲第1番 op.1-1", React.createElement("br", null), 
"カリンニコフ/セレナーデ", React.createElement("br", null), 
"チャイコフスキー/フィレンツェの想い出", React.createElement("br", null)
      ), 
      React.createElement("button", {className: "mt-2em ml-10px"}, "チケットはこちら")
    ), 
    React.createElement("div", {className: "column2-right images"}, 
      React.createElement("img", {src: "81VDaop7qIL._SL290_.jpg"}), 
      React.createElement("img", {src: "Kalinnikov2.jpg"})
    )
  )
), 
React.createElement(Footer, null)
)
		);
	}
});