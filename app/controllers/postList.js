var args = arguments[0] || {};

var postCol = Alloy.Collections.instance('post');

postCol.on('reset add',function(){
	var items = [];
	postCol.each(function(model){
		Ti.API.info(model.attributes);
		items.push({
			template : model.get('photo')?"imageT":"textT",
			content: {
				text : model.get('content')
			},
			thumb : {
				image : model.get('photo') && model.get('photo').urls && model.get('photo').urls.original
			},
			date : {
				text : AG.moment(model.get('created_at')).fromNow()
			},
			name : {
				text : model.get('user').username
			},
			properties : {
				itemId : model.id
			}
		});
	});
	$.section.setItems(items);
});

postCol.fetch();



$.listView.addEventListener('itemclick', function(e) {
	
	var clickModel = postCol.get(e.itemId);
	
	var detailC = Alloy.createController('postDetail',{
		model : clickModel
	});
	AG.mainTabGroup.activeTab.open(detailC.getView());
});
