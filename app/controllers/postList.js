var args = arguments[0] || {};

$.section.setItems([
	{
		template : 'aT',
		content : {
			text : '진짜'
		}
	}
]);

$.listView.addEventListener('itemclick',function(e){
	var detailC = Alloy.createController('detailView');
	
	
	Alloy.Globals.mainTabGroup.activeTab.open(detailC.getView());
});
