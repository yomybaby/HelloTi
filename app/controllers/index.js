
// good

Alloy.Globals.mainTabGroup = $.index;

fb.addEventListener('login', function(e) {
	
	Cloud.SocialIntegrations.externalAccountLogin({
    type: 'facebook',
	    token: fb.accessToken
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        alert('Success:\n' +
	            'id: ' + user.id + '\n' +
	            'first name: ' + user.first_name + '\n' +
	            'last name: ' + user.last_name);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});


$.index.addEventListener('open', function(e) {
	fb.authorize();
});

$.index.open();