var args = arguments[0] || {};

var revCol = Alloy.createCollection('review');
revCol.on('reset add',function(){
	
	var result = '';
	revCol.each(function(review){
		result += review.get('content');
		result +='\n';
	});
	
	$.reviewLabel.text = result;
});

revCol.fetch({
	data : {
		post_id : args.model.id
	}
});


$.contentLabel.text = args.model.get('content');



$.reviewField.addEventListener('return', function(e) {
	revCol.create({
		content : e.value,
		post_id : args.model.id,
		allow_duplicate : true
	});
});
