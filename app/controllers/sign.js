var fb = require('facebook');

var Cloud = require('ti.cloud');
var fbLoginHandler = function(e) {
	
	if(e.success){
		var token = fb.getAccessToken();
		fb.logout();
		
		
		Cloud.SocialIntegrations.externalAccountLogin({
			type : 'facebook',
			token : token
		}, function(e) {
			if (e.success) {
				//var user = e.users[0];
				//ealert('Success:\n' + 'id: ' + user.id + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
				//afterLogin();
				$.getView().close();
				Ti.App.Properties.setString("sessionId",Cloud.sessionId);
				
			} else {
				//alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }

}
fb.addEventListener('login', fbLoginHandler);

$.fbButton.addEventListener('click', function(e) {
	fb.authorize();
});

$.acsLoginWidget.init({
	loginCallback : afterLogin
});

function afterLogin(){
	$.getView().close();
	Ti.App.Properties.setString("sessionId",Cloud.sessionId);
}

$.getView().addEventListener('close', function(e) {
	fb.removeEventListener('login', fbLoginHandler);
});

