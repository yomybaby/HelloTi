exports.definition = {
	config: {

		adapter: {
	        type: "acs",
	    },
	    settings: {
	        object_name: "reviews", 
	        object_method: "Reviews"
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
		});

		return Collection;
	}
};