exports.createLabel = function(_args) {

	var label = Ti.UI.createLabel({
		text : _args.text,
		color : _args.color || 'white',
		left : _args.left || '0',
		top : _args.top || '0',
		width : _args.width || Ti.UI.SIZE,
		height : _args.height || Ti.UI.SIZE

	});

	switch (_args.type) {

		case 'header':
			label.font = {
				fontSize : 24,
				fontWeight : 'bold'
			};
			label.bottom = 5;
			label.top = 5;
			label.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
			label.width = Ti.UI.FILL;
			label.backgroundColor = _args.backgroundColor || 'rgb(128,0,0)';

			break;
		case 'text':
			label.font = {
				fontSize : 24,
				fontWeight : 'normal'
			};
			label.bottom = _args.bottom || '5';
			label.top = _args.top || '5';
			label.left = _args.left || '5';
			label.width = Ti.UI.SIZE;
			label.color = 'black';
			label.backgroundColor = _args.backgroundColor || 'transparent';

			break;

		default:

			break;

	}

	return label;
}

exports.createTextField = function(_args) {

	var textField = Ti.UI.createTextField({

		top : _args.top || '5',
		right: '0',
		bottom : _args.bottom || '5',
		width : _args.width || Ti.UI.FILL,
		height : _args.height || Ti.UI.SIZE,
		hintText : _args.hintText || '',
		size : '24',
		keyboardType : _args.keyboardType || Ti.UI.KEYBOARD_DEFAULT,
		borderStyle : _args.borderStyle || Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		value: _args.value
	});



	return textField;
}

exports.createButton = function(_args) {

	var button = Ti.UI.createButton({
		title : _args.title,
		backgroundColor : _args.backgroundColor || '#c0c0c0',
		bottom : _args.bottom || '5',
		top : _args.top || '5',
		left : _args.left || Ti.UI.CENTER,
		height: _args.height || Ti.UI.SIZE,
		width: _args.width || Ti.UI.SIZE,
		font : {
			fontSize : 20,
			fontStyle : 'normal',
			fontWeight : 'bold'
		}

	});
return button;

}

exports.createFormRow = function(_args){
	
	var view = Ti.UI.createView({
		backgroundColor : 'red',
		top : '0',
		height : Ti.UI.SIZE,
		width: Ti.UI.FILL
	});

	var label = exports.createLabel({
		text : _args.name,
		type : 'text',
		top : 0
	});

	var tf = exports.createTextField({

		top : 0,
		hintText : _args.hintText,
		width: '50%',
		right: '0',
		value: _args.value || ''
	});

view.add(label);
view.add(tf);

return view;

}



