var args = arguments[0] || {};

var postModel = args.model;

$.name.text = postModel.get('user').username;
$.date.text = AG.moment(postModel.get('created_at')).fromNow();

$.content.text = postModel.get('content');
$.photo.image = postModel.get('photo') && postModel.get('photo').urls && postModel.get('photo').urls.original

$.photo.addEventListener('click', function(e) {
	$.getView().close();
});

var win = $.getView();
win.addEventListener("open", function() {
    if (OS_ANDROID) {
        if (! win.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            actionBar = win.activity.actionBar;
            if (actionBar) {
                // actionBar.backgroundImage = "/bg.png";
                actionBar.title = "New Title";
                actionBar.displayHomeAsUp = true;
                actionBar.onHomeIconItemSelected = function() {
                    win.close();
                };
            }
        }
    }
});