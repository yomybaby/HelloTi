var args = arguments[0] || {};

var postCol = Alloy.Collections.instance('post');

$.saveBtn.addEventListener('click', function(e) {
	postCol.create({
		content : $.ta.value 
	},{
		success : function(){
			$.ta.value = "";
			$.ta.blur();
		},
		wait : true
	});
});

$.cancelBtn.addEventListener('click', function(e) {
	var toasty = Alloy.createWidget("toasty");
	toasty.show("Hello World");
});