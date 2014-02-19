$.index.open();

$.content.addEventListener('change',function(ev){
	$.length.text = ev.value.length;
});
