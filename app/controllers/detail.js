var args = arguments[0] || {};
var curWin = $.detail;
var postModel = args.model;

$.dump.text  = JSON.stringify(postModel.attributes);


curWin.addEventListener("open", function() {
    if (Ti.Platform.osname === "android") {
        if (! curWin.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            actionBar = curWin.activity.actionBar;
            if (actionBar) {
                //actionBar.backgroundImage = "/bg.png";
                actionBar.title = curWin.title;
                actionBar.onHomeIconItemSelected = function() {
                    Ti.API.info("Home icon clicked!");
                };
            }
        }
    }
});