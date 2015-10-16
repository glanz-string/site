"use strict";

Tickets = React.createClass({
  displayName: "Tickets",

  render: function render() {
    // スクロール位置を一番上に戻す
    window.scrollTo(0, 0);
    return React.createElement(
      "div",
      { className: "body-wrap" },
      React.createElement(Header, null),
      React.createElement(Ad, null),
      React.createElement(
        "section",
        { className: "content mt-30px" },
        React.createElement(
          "h1",
          null,
          React.createElement("img", { src: "images/tickets.png" })
        ),
        React.createElement("hr", null),
        React.createElement(
          "article",
          { className: "ticket-form" },
          React.createElement(
            "address",
            { className: "contact_us" },
            React.createElement(
              "p",
              { className: "mt-1em" },
              "前売り券：1000円",
              React.createElement("span", { className: "ml-2em" }),
              "当日券：1500円"
            ),
            React.createElement(
              "p",
              { className: "mt-1em" },
              "以下のフォームにお名前、電話番号、希望枚数等をご記入の上お申込みください。",
              React.createElement("br", null),
              "チケット代は演奏会当日受付でお支払いください。"
            ),
            React.createElement(MailForm, { model: ticketMail }),
            React.createElement(
              "p",
              { className: "mt-1em" },
              "※送信後の確認メールの送信には時間が掛かる場合がございます。"
            )
          )
        )
      ),
      React.createElement(Footer, null)
    );
  }
});