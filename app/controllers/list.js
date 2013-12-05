
var curWin = $.list;

var postCol = Alloy.createCollection('post');
// Alloy.Collection('post').instance();

postCol.on('reset',function(col){
	var items = [];
	postCol.each(function(model){
		items.push({
			titleLabel : {
				text : model.get('title')
			},
			contentLabel : {
				text : model.get('content')
			},
			template : model.get('content')?'longPostTemplate':'postTemplate',
			properties : {
				itemId : model.id
			}
		});
	});
	$.section.setItems(items);
});

postCol.fetch({
	data : {
		page: 1,
    	per_page: 2
	}
});

$.listView.addEventListener('itemclick', function(e) {
	if(e.itemId){
		var clickedModel = postCol.get(e.itemId);
		
		// detail 컨트롤러 만들고, 모델을 넘겨서, detail을 연다.
		
		var detailC = Alloy.createController('detail',{
			model : clickedModel
		});
		
		Alloy.Globals.mainTabGroup.activeTab.open(
			detailC.getView()
		);
	}
});

