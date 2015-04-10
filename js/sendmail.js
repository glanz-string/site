SendMail = Backbone.Model.extend({
	defaults: {
		hostUrl: "",
		tokenToGetToken: "GET_TOKEN",
		dataType: 'json',
		method: 'POST',
		token: "",
		address: "",
		message: "",
		subject: "",
		fixSubject: false,
		tokenGotten: false,
		mailSending: false,
		textStatus: "",
		status: true
	},
	getToken: function (_setStatus) {
		setStatus = _setStatus === undefined ? true : _setStatus;
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: { 'token': this.get('tokenToGetToken') },
			success: (function (data) {
				if (setStatus) {
					this.set({
						token: data['token'],
						tokenGotten: true,
						textStatus: "",
						status: true
					});
				} else {
					this.set({
						token: data['token'],
						tokenGotten: true,
					});
				}
			}).bind(this),
			error: (function (XMLHttpRequest, textStatus, errorThrown) {
				this.set({
					token: "",
					tokenGotten: false,
					textStatus: "サーバーへのアクセスに失敗",
					status: false
				});
			}).bind(this)
		});
	},

	sendMail: function () {
		if (!this.get("tokenGotten")) {
			return 0;
		}
		this.set({
			textStatus: "送信中",
			status: true,
			mailSending: true
		});
		$.ajax({
			url: this.get('hostUrl'),
			type: this.get('method'),
			dataType: this.get('dataType'),
			data: {
				token: this.get('token'),
				address: this.get('address'),
				message: this.get('message'),
				subject: this.get('subject')
			},
			success: (function (data) {
				console.log("success to access to php: " + data.status);

				this.getToken(false);

				var status;

				if (data.success) {
					this.clearMail();
					status = true;
				} else {
					status = false;
				}

				this.set({
					mailSending: false,
					textStatus: data.status,
					status: status
				});

			}).bind(this),
			error: (function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("failed to access to php: " + textStatus);

				this.set({
					mailSending: false,
					textStatus: "サーバーへのアクセスに失敗。再送信してください。",
					status: false
				});
			}).bind(this)
		});
	},

	clearMail: function () {
		if (this.get('fixSubject')) {
			this.set({
				address: "",
				message: "",
			});
		} else {
			this.set({
				address: "",
				message: "",
				subject: "",
			})
		}
	},

	initAll: function (_settings) {
		var settings = {
			token: "",
			address: "",
			message: "",
			subject: "",
			fixSubject: false,
			tokenGotten: false,
			mailSending: false,
			textStatus: "",
			status: true
		};
		_.extend(settings,_settings)
		this.set(settings);
	}

});