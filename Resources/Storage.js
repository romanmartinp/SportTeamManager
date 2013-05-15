exports.setValue = function(name, value) {

	Ti.App.Properties.setList(name, value);

};

exports.getValue = function(name) {

	var value = Ti.App.Properties.getList(name);

	return value;

}
