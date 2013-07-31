var Cloud = require('ti.cloud'),
	storedSession;

Alloy.Globals.mainTabGroup = $.index;
$.index.open();

Cloud.debug = true;
storedSession = Ti.App.Properties.getString("sessionId");
Ti.API.info(storedSession);
if(storedSession){
	// Cloud.setSessionId(storedSession); //이 명령어는 안됨. 버그
	Cloud.sessionId = storedSession;
}else{
	openLoginWindow();
}

function openLoginWindow(){
	var signC = Alloy.createController('sign');
	signC.getView().open();
}

$.logoutButton.addEventListener('click', function(e) {
	Cloud.Users.logout(function (e) {
	    if (e.success) {
	        //alert('Success: Logged out');
	        Ti.App.Properties.setString('sessionId',null);
	        $.index.setActiveTab(0);
	        openLoginWindow();
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

