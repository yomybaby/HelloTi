$.index.open();

$.saveBtn.addEventListener('click', function(e) {
	if(OS_DEV){
		alert('save');
	}else{
		alert('Android Save');
	}
});

$.cancelBtn.addEventListener('click', function(e) {
	var toasty = Alloy.createWidget("toasty");
	toasty.show("Hello World");
});


$.section.setItems([
	{
		template : "myT",
		title: {
			text : 'WWWWW'
		},
		properties : {
			
		}
	},
	{
		template : "blueT",
		title: {
			text : 'WWWWW'
		},
		properties : {
			
		}
	}
]);
