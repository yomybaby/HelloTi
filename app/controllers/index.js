$.index.open();
AG.mainTabGroup = $.index;

var loginControl = Alloy.createController('login');
loginControl.openIfNotLogin();

$.logoutBtn.addEventListener('click', function(e) {
	loginControl.logout();
});


 