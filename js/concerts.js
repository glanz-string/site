var Concerts = React.createClass({displayName: "Concerts",
  onClick: function () {
    Backbone.history.navigate("tickets",true);
  },
	render: function () {
		return(
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("section", {className: "content mt-30px"}, 

  React.createElement("h1", null, React.createElement("img", {src: "images/concerts.png"})), 
  React.createElement("hr", null), 
  React.createElement("article", {className: "concert mt-10px"}, 
    React.createElement("div", {className: "column2-left"}, 
      React.createElement("p", {className: "title mt-10px"}, "第2回演奏会", React.createElement("br", null), 
"メンバーによるプロデュースシリーズ Vol.1", React.createElement("br", null), 
"君塚氏、愛を語る！　～弦楽が奏でる愛の物語"
      ), 
      React.createElement("p", {className: "info mt-20px"}, "2015年5月30日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市神奈川区民文化センター　かなっくホール", React.createElement("br", null), 
React.createElement("br", null), 
"モーツァルト/歌劇「フィガロの結婚」序曲", React.createElement("br", null), 
"チャイコフスキー/「眠りの森の美女」よりワルツ", React.createElement("br", null), 
"クライスラー/「愛の喜び」", React.createElement("br", null), 
"シベリウス/「ロマンス」", React.createElement("br", null), 
"スーク「弦楽セレナーデより第一楽章」", React.createElement("br", null), 
"ベートーヴェン「交響曲第二番」", React.createElement("br", null), 
"※全て弦楽合奏版"
      ), 
      React.createElement("button", {className: "mt-2em ml-10px", onClick: this.onClick}, "チケットはこちら")
    ), 
    React.createElement("div", {className: "column2-right images"}, 
      React.createElement(Thumbnail, {src: "/images/concerts/2_1small.jpg", largeImageSrc: "/images/concerts/2_1.jpg", alt: "パンフレット(表)"}), 
      React.createElement(Thumbnail, {src: "/images/concerts/2_2small.jpg", largeImageSrc: "/images/concerts/2_2.jpg", alt: "パンフレット(裏)"})
    )
  ), 
  React.createElement("hr", null), 
  React.createElement("article", {className: "concert mt-10px"}, 
    React.createElement("div", {className: "column2-left"}, 
      React.createElement("p", {className: "title mt-10px"}, "第1回演奏会", 
      React.createElement("span", {className: "past ml-40px"}, "終了")), 
      React.createElement("p", {className: "info mt-20px"}, "2014年5月31日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市緑区民文化センター", React.createElement("br", null), 
React.createElement("br", null), 
"モーツァルト/交響曲第41番”ジュピター”", React.createElement("br", null), 
"ハイドン/弦楽四重奏曲第1番 op.1-1", React.createElement("br", null), 
"カリンニコフ/セレナーデ", React.createElement("br", null), 
"チャイコフスキー/フィレンツェの想い出", React.createElement("br", null)
      )
    ), 
    React.createElement("div", {className: "column2-right images"}, 
      React.createElement(Thumbnail, {src: "/images/concerts/1_1small.jpg", largeImageSrc: "/images/concerts/1_1.jpg", alt: "パンフレット"})
    )
  )
), 
React.createElement(Footer, null)
)
		);
	}
});
