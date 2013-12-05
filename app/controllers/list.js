
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

postCol.reset([
	{
		id : 1,
		title: '제목1',
		content : '내용1'	
	},
	{
		id : 2,
		title: '제목2',
		content : '내용2'	
	},
	{
		id : 3,
		title: '제목3',
		content : '내용3'	
	},
	{
		id : 4,
		title : '제목4'
	}
]);

$.listView.addEventListener('itemclick', function(e) {
	if(e.itemId){
		var clickedModel = postCol.get(e.itemId);
		
		// detail 컨트롤러 만들고, 모델을 넘겨서, detail을 연다.
		
		var detailC = Alloy.createController('detail',{
			model : clickedModel
		});
		
		detailC.getView().open();
	}
});

