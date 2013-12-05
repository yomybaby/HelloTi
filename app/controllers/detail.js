var args = arguments[0] || {};

var postModel = args.model;

$.dump.text  = JSON.stringify(postModel.attributes);
