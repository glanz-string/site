SendMail = Backbone.Model.extend({
	defaults: {
		hostUrl: "",
		tokenToGetToken: "GET_TOKEN",
		dataType: 'json',
		method: 'POST',
		token: "",
		address: "",
		message: "",
		tokenGotten: false,
		mailSent: false,
		textStatus: ""

	},
	getToken: function () {
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: { 'token': this.get('tokenToGetToken') },
			success: (function (data) {
				this.set({
					token: data['token'],
					tokenGotten: true
				});
			}).bind(this),
			error: (function (XMLHttpRequest, textStatus, errorThrown) {
				this.set({
					token: "",
					tokenGotten: false,
					textStatus: textStatus
				});
			}).bind(this)
		});
	},

	sendMail: function () {
		if (!this.get("tokenGotten")) {
			return 0;
		}
		this.set("textStatus","送信中")
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: {
				token: this.get('token'),
				address: this.get('address'),
				message: this.get('message')
			},
			success: (function (data) {
				console.log("success to access to php: " + data.status);
				this.getToken();

				if (data.success) {
					this.clearMail();
				}

				this.set("textStatus",data.status);
			}).bind(this),
			error: (function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("failed to access to php: " + textStatus);
				this.set("textStatus",textStatus);
			}).bind(this)
		});
	},

	clearMail: function () {
		this.set({
			address: "",
			message: "",
		});
	},

	initAll: function () {
		this.set({
			token: "",
			address: "",
			message: "",
			tokenGotten: false,
			mailSent: false,
			textStatus: ""
		});

	}

});