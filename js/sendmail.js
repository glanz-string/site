SendMail = Backbone.Model.extend({
	defaults: {
		hostUrl: "",
		tokenToGetToken: "GET_TOKEN",
		dataType: 'json',
		method: 'POST',
		token: "",
		address: "",
		message: "unko",
		tokenGotten: false
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
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				this.set({
					token: data['token'],
					tokenGotten: false
				});
			}
		});
	},

	sendMail: function () {
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: {
				token: this.get('token'),
				address: this.get('address'),
				message: this.get('message')
			},
			success: function (data) {
				console.log("success to access to php: " + data.status);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("failed to access to php: " + textStatus);

			}
		});
	}


});