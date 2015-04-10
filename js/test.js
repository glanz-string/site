Test = React.createClass({displayName: "Test",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 

React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/tickets.png"})), 
  React.createElement("hr", null), 

  React.createElement("article", {className: "ticket-form"}, 
    React.createElement("address", {className: "contact_us"}, 
      React.createElement("p", {className: "mt-1em"}, "前売り券：1000円", React.createElement("span", {className: "ml-2em"}), "当日券：1500円"), 
      React.createElement("p", {className: "mt-1em"}, "以下のフォームに希望枚数等をご記入の上お申込みください。"), 
      React.createElement(MailForm, {model: sendmail})
    )
  )
), 

React.createElement(Footer, null)
)
		);
	}
})