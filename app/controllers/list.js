
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
			template : model.get('content')?'longPostTemplate':'postTemplate'
		});
	});
	$.section.setItems(items);
});

postCol.reset([
	{
		title: '제목1',
		content : '내용1'	
	},
	{
		title: '제목2',
		content : '내용2'	
	},
	{
		title: '제목3',
		content : '내용3'	
	},
	{
		title : '제목4'
	}
]);

