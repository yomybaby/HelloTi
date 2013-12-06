var postCol = Alloy.Collections.instance('post');

$.saveBtn.addEventListener('click', function(e) {
	postCol.create({
		title : $.title.value,
		content : $.content.value
	},
	{
		wait : true,
		success : function(){
			$.title.value = '';
			$.content.value = '';
			Alloy.Globals.mainTabGroup.setActiveTab(0);
			$.title.blur();
			$.content.blur();
		}
	});
});
