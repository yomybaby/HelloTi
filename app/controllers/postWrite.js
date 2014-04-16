var args = arguments[0] || {};

var postCol = Alloy.Collections.instance('post');
var selectedPhoto;

$.saveBtn.addEventListener('click', function(e) {
	postCol.create({
		content : $.ta.value ,
		photo : selectedPhoto,
		"photo_sync_sizes[]" : "original"
	},{
		success : function(){
			$.ta.value = "";
			$.ta.blur();
			selectedPhoto = null;
			
		},
		wait : true
	});
});

$.cancelBtn.addEventListener('click', function(e) {
	var toasty = Alloy.createWidget("toasty");
	toasty.show("Hello World");
});


$.photoBtn.addEventListener('click', function(e) {
	Titanium.Media.openPhotoGallery({
		success:function(event)
		{
			var image = event.media;
			
			selectedPhoto = image;
		},
		cancel:function()
		{
	
		},
		error:function(error)
		{
		},
		allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});
});
