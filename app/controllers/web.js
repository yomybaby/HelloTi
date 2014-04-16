var args = arguments[0] || {};

// $.webView.url = "http://bloter.net"

$.webView.url = "test.html";


// Create an HTTPClient.
var anXhr = Ti.Network.createHTTPClient();
anXhr.setTimeout(10000);

// Define the callback.
anXhr.onload = function() {
	// Handle the XML data.
	
	alert(this.responseText);
	$.webView.html = this.responseText;
};
anXhr.onerror = function() {
	
}

// Send the request data.
anXhr.open('GET','http://bloter.net');
anXhr.send();

Ti.App.addEventListener('mye', function(e) {
	alert(e);
});

$.webView.addEventListener('load', function(e) {
	// alert($.webView.evalJS('document.title'));
});
