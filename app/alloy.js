// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var AG = Alloy.Globals;
AG.Cloud = require('ti.cloud');

AG.Cloud.Users.login({
    login: 'admin',
    password: 'admin'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        var toasty = Alloy.createWidget("toasty");
			toasty.show("로그인 성공");
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});



