var moment = require('alloy/moment'),
	fontawesome = require('IconicFont').IconicFont({
		font: 'FontAwesome'
	});

/**
 * Model 
 */
var postCol = Alloy.Collections.instance('post');
var modelToItemObj = function(model){
	return {
		contentLabel : {
			text : model.get('content')
		},
		template : 'postTemplate',
		dateLabel : {
			text : moment(model.get('created_at')).fromNow()
		},
		userNameLabel : {
			text : model.get('user').username
		},
		properties : {
			itemId : model.id
		}
	};
};

/*
 * Model events
 */
postCol.on('reset',function(){
	var items = [];
	postCol.each(function( model, index){	
		items.push( modelToItemObj(model) );
	});
	$.postSection.setItems(items);
});

postCol.on('add',function(model){
	$.postSection.insertItemsAt(0,[ modelToItemObj(model) ])
});


postCol.on('change:content',function(model){
	var id = model.id;
	
	var idx=-1;
	var foundItem = _.find($.postSection.items,function(item){
		idx++;
		return item.properties.itemId == id;
	});
	
	foundItem.contentLabel.text = model.get('content');
	$.postSection.updateItemAt(idx, foundItem);
});


/*
 * Model Fetch
 */
postCol.fetch();


/**
 * View Events
 */

$.listView.addEventListener('itemclick',function(e){
	var cModel = postCol.get(e.itemId); //clickedModel
	var detailC = Alloy.createController('postDetail',{
		model : cModel
	});
	Alloy.Globals.mainTabGroup.activeTab.open(detailC.getView());
});

function onClickWriteButton () {
	var writeC = Alloy.createController('writePost');
	
	
	writeC.getView().open((OS_IOS)?{modal : true}:null);
}

if(OS_IOS){
	$.writeButton.addEventListener('click', onClickWriteButton);
	$.writeButton.applyProperties({
		backgroundImage : '/images/1px.gif',
		title : fontawesome.icon('icon-pencil'),
		font : {
			fontFamily:fontawesome.fontfamily(),
			fontSize : 30
		}	
	});
}

function onWindowOpen(e) {
   if(OS_ANDROID) Alloy.Globals.mainTabGroup.getActivity().invalidateOptionsMenu();
}



