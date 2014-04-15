var args = arguments[0] || {};

$.saveBtn.addEventListener('click', function(e) {
	if(OS_IOS){
		alert('save');
	}else{
		alert('Android Save!');
	}
});

$.cancelBtn.addEventListener('click', function(e) {
	var toasty = Alloy.createWidget("toasty");
	toasty.show("Hello World");
});