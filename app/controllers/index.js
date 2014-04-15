$.index.open();

$.saveBtn.addEventListener('click', function(e) {
	if(OS_IOS){
		alert('save');
	}else{
		alert('Android Save');
	}
});

$.cancelBtn.addEventListener('click', function(e) {
	alert('cancel');
});

