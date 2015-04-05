Tickets = React.createClass({displayName: "Tickets",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 

React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/tickets.png"})), 
  React.createElement("hr", null), 
  React.createElement("address", {className: "contact_us"}, 
React.createElement("h1", {className: "mt-1em"}, "チケット"), 
React.createElement("p", {className: "ml-1em"}, "前売り券：1000円", React.createElement("span", {className: "ml-2em"}), "当日券：1500円"), 
React.createElement("h1", {className: "mt-2em"}, "チケットをご希望の方は以下の連絡先にお問い合わせ下さい"), 
React.createElement("p", {className: "ml-1em"}, "メールアドレス：glanz.strings＠gmail.com (@は半角に直して下さい)"), 
React.createElement("p", {className: "ml-1em"}, "電話番号：080-3180-7125(岩本)")
  )
), 

React.createElement(Footer, null)
)
		);
	}
})