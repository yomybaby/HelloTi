var args = arguments[0] || {};

$.content.addEventListener('change',function(ev){
	$.length.text = ev.value.length;
});

$.cancelBtn.addEventListener('click', function(e) {
	$.content.value = '';
});

$.saveBtn.addEventListener('click', function(e) {
	
	var postCol = Alloy.Collections.instance('post');
	
	postCol.create({
		content : $.content.value
	},{
		success: function(){
			var toasty = Alloy.createWidget("toasty");
			toasty.show("저장 완료!");
			$.content.value = '';
			Alloy.Globals.mainTabGroup.setActiveTab(0);
		},
		wait : true
	});
	
		
});