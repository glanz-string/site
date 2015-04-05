AboutUs = React.createClass({displayName: "AboutUs",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/glanz.png"})), 
  React.createElement("hr", null), 
  React.createElement("article", null, "阪本正彦氏を中心にプロ奏者からアマチュア奏者、学生など様々なメンバーが集まって創立された弦楽合奏団です。", React.createElement("br", null), 
"既存の弦楽合奏の形にとらわれず、聴きにきてくださる方が再度聴きたくなるような独自性のある演奏会を目指しています。熱い演奏を、そして楽しい演奏会を、是非聴きにいらして下さい。"
  )
), 

React.createElement(Footer, null)
)
		);
	}
})