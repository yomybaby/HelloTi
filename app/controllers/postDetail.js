var args = arguments[0] || {};

var postModel = args.model;

$.name.text = postModel.get('user').username;
$.date.text = AG.moment(postModel.get('created_at')).fromNow();

$.content.text = postModel.get('content');
$.photo.image = postModel.get('photo') && postModel.get('photo').urls && postModel.get('photo').urls.original
