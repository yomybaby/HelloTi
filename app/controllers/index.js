$.index.open();

$.content.addEventListener('change',function(ev){
	$.length.text = ev.value.length;
});

$.cancelBtn.addEventListener('click', function(e) {
	$.content.value = '';
});

$.saveBtn.addEventListener('click', function(e) {
	alert($.content.value);
});


