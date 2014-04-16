$.index.open();

var loginControl = Alloy.createController('login');
loginControl.openIfNotLogin();

$.logoutBtn.addEventListener('click', function(e) {
	loginControl.logout();
});
