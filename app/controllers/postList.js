var args = arguments[0] || {};

var postCol = Alloy.Collections.instance('post');

// postCol.create(
	// {
		// content : 'XXX',
		// image : "http://icon.daumcdn.net/w/icon/1404/15/161406345.jpeg"
	// }
// );

postCol.on('reset add',function(){
	var items = [];
	postCol.each(function(model){
		items.push({
			template : model.get('image')?"imageT":"textT",
			content: {
				text : model.get('content')
			},
			thumb : {
				image : model.get('image')
			}
		});
	});
	$.section.setItems(items);
});

postCol.fetch();




// $.section.setItems([
	// {
		// template : "imageT",
		// content: {
			// text : 'WWWWW'
		// },
		// thumb : {
			// image : "http://icon.daumcdn.net/w/icon/1404/15/161406345.jpeg"
		// }
	// },
	// {
		// template : "textT",
		// content: {
			// text : 'TextOnly'
		// }
	// }
// ]);
