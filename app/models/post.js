exports.definition = {
	config: {

		adapter: {
			type: "acs",
			
		},
		"settings": {
	        "object_name": "posts", 
	        "object_method": "Posts"
	    }
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			comparator : function(model) {
			  return model.get("content");
			}
		});

		return Collection;
	}
};