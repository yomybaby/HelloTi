var args = arguments[0] || {};


//1. 컬렉션 생성 
// Alloy.Globals.postCol = Alloy.createCollection('post');
var postCol = Alloy.Collections.instance('post');

//2. 컬렉션의 이벤트 핸들러를 등록합니다.
// 데이터를 다 가져오면 reset 이벤트가 발생함
postCol.on('reset add',function(){
	
	var items = [];
	
	// 모델 개수만큼 함수 호출하면서 item을 만듭니다.
	postCol.each(function( model ){
		var item = {
			template : 'aT',
			content : {
				text : model.get('content')
			},
			time : {
				text : model.id
			},
			properties: {
				itemId : model.id
			}
		};
		
		items.push(item); //배열에 추가
	});	
	
	$.section.setItems(items); //섹션에 추가하기
});

//3. 데이터를 가져옵니다.
postCol.fetch();


$.listView.addEventListener('itemclick',function(e){
	var clickModel = postCol.get(e.itemId);
	var detailC = Alloy.createController('detailView',{
		model : clickModel
	});
	
	
	Alloy.Globals.mainTabGroup.activeTab.open(detailC.getView());
});
