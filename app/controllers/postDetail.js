var args = arguments[0] || {},
	model = args.model;

$.content.value = model.get('content');

$.content.addEventListener('change',function(){
	model.set({
		content : this.value
	});
});

$.getView().addEventListener('close', function(e) {
	model.save();
});

