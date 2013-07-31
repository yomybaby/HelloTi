var postCol = Alloy.Collections.instance('post');

function onClickSave(){
	postCol.create({
		content: $.contentTextArea.value
	},{
		wait: true
	});
	$.getView().close();
}

if(OS_IOS){
	$.saveButton.addEventListener('click', onClickSave);
	
	$.cancelButton.addEventListener('click', function(e) {
		$.getView().close();
	});
}