// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


//1. 컬렉션 생성 
var postCol = Alloy.createCollection('post');


//2. 컬렉션의 이벤트 핸들러를 등록합니다.
// 데이터를 다 가져오면 reset 이벤트가 발생함
postCol.on('reset',function(){
	alert( postCol.models[0].get('title') );
});

//3. 데이터를 가져옵니다.
postCol.fetch();

