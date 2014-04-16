var args = arguments[0] || {};

AG.Cloud.sessionId=Ti.App.Properties.getString('acs_sessionId');

$.loginBtn.addEventListener('click', function(e) {
	var username = $.username.value,
		password = $.password.value;
	
	AG.Cloud.Users.login({
	    login: username,
	    password: password
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        
	        Ti.App.Properties.setString('acs_sessionId', AG.Cloud.sessionId);
	        alert('Success :\n' +
	            'id: ' + user.id + '\n' +
	            'sessionId: ' + AG.Cloud.sessionId + '\n' +
	            'first name: ' + user.first_name + '\n' +
	            'last name: ' + user.last_name);
	        $.getView().close();
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
	
});

exports.openIfNotLogin = function(){
	if(!AG.Cloud.sessionId){
		$.login.open();
	}
};

exports.logout = function(){
	AG.Cloud.Users.logout(function (e) {
	    if (e.success) {
	        alert('Success: Logged out');
	        Ti.App.Properties.setString('acs_sessionId',null);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};
