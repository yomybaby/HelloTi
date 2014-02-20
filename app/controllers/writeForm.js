var args = arguments[0] || {};

$.content.addEventListener('change',function(ev){
	$.length.text = ev.value.length;
});

$.cancelBtn.addEventListener('click', function(e) {
	$.content.value = '';
});

$.saveBtn.addEventListener('click', function(e) {
	
	var postCol = Alloy.Collections.instance('post');
	
	postCol.create({
		content : $.content.value,
		photo : selectedImage,
		'photo_sync_sizes[]' :'original',
	},{
		success: function(){
			var toasty = Alloy.createWidget("toasty");
			toasty.show("저장 완료!");
			$.content.value = '';
			Alloy.Globals.mainTabGroup.setActiveTab(0);
		},
		wait : true
	});
	
		
});
var selectedImage;
$.picBtn.addEventListener('click', function(e) {
	//갤러리 열기
	
	Ti.Media.openPhotoGallery({
		success : function(e) {
			$.preview.image = e.media;
			selectedImage = e.media;
		},
		cancel : function() {
		},
		error : function(error) {
			var message;
			if (error.code == Ti.Media.NO_CAMERA) {
				message = 'Device does not have video recording capabilities';
			} else {
				message = 'Unexpected error: ' + error.code;
			}
	
			Ti.UI.createAlertDialog({
				title : 'Camera',
				message : message
			}).show();
		}
	});
	
	
	// 사진 선택하면 ...
	
});
