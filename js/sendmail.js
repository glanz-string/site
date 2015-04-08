SendMail = Backbone.Model.extend({
	defaults: {
		hostUrl: "",
		tokenToGetToken: "GET_TOKEN",
		dataType: 'json',
		method: 'POST',
		token: ""
	},
	getToken: function (sucFunc,errFunc) {
		$.ajax({
			url: this.hostUrl,
			type: this.method,
			dataType: this.dataType,
			data: { 'token': tokenToGetToken },
			success: function (data) {
				this.token = data['token'];
				console.log(data);
				if (sucFunc) {
					sucFunc();
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				if (errFunc) {
					errFunc();			
				}
			}
		});
	},

	sendMail: function (address,message,sucFunc,errFunc) {
		$.ajax({
			url: this.hostUrl,
			type: this.method,
			dataType: this.dataType,
			data: {
				token: this.token,
				message: address,
				address: message
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