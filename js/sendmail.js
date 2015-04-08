SendMail = Backbone.Model.extend({
	defaults: {
		hostUrl: "",
		tokenToGetToken: "GET_TOKEN",
		dataType: 'json',
		method: 'POST',
		token: "",
		address: "",
		message: "unko",
	},
	getToken: function (sucFunc,errFunc) {
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: { 'token': this.get('tokenToGetToken') },
			success: (function (data) {
				this.set("token", data['token']);
				console.log(data);
				if (sucFunc) {
					sucFunc();
				}
			}).bind(this),
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				if (errFunc) {
					errFunc();			
				}
			}
		});
	},

	sendMail: function (sucFunc,errFunc) {
		$.ajax({
			url: this.hostUrl,
			type: this.method,
			dataType: this.dataType,
			data: {
				token: this.token,
				message: this.address,
				address: this.message
			},
			success: function (data) {
				console.log("success to access to php: " + data.status);
				if (sucFunc) {
					sucFunc(data);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("failed to access to php: " + textStatus);
				if (errFunc) {
					errFunc(XMLHttpRequest, textStatus, errorThrown);
				}
			}
		});
	}


});