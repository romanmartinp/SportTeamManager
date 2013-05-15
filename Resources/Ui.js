var imagePath = "/images/"

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
				fontSize : 12,
				fontWeight : 'bold'
			};
			label.bottom = _args.bottom || '5';
			label.top = _args.top || '5';
			label.left = _args.left || '5';
			label.width = Ti.UI.SIZE;
			label.color = '#778899';
			label.backgroundColor = _args.backgroundColor || 'transparent';

			break;

		default:

			break;

	}

	return label;
}

exports.createIcon = function(_args) {

	var header;

	switch (_args.type) {

		case 'header':

			header = Ti.UI.createImageView({
				image : imagePath + _args.image,
				bottom : 10,
				width : _args.width || 25,
				height : _args.height || 25,
				backgroundColor : 'transparent'
			})

			break;

		default:
			break;

	};

	return header;

};

exports.createTextField = function(_args) {

	var textField;

	switch (_args.type) {

		case 'text':

			textField = Ti.UI.createTextField({

				top : _args.top || '5',
				left : '0',
				bottom : _args.bottom || '5',
				width : _args.width || '60%',
				height : _args.height || Ti.UI.SIZE,
				hintText : _args.hintText || ' ',
				keyboardType : _args.keyboardType || Ti.UI.KEYBOARD_DEFAULT,
				borderStyle : _args.borderStyle || Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : _args.value
			});

			break;

		case 'number':
			textField = Ti.UI.createTextField({

				top : _args.top || '5',
				left : '0',
				bottom : _args.bottom || '5',
				width : _args.width || '25%',
				height : _args.height || Ti.UI.SIZE,
				hintText : _args.hintText || ' ',
				keyboardType : _args.keyboardType || Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
				borderStyle : _args.borderStyle || Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : _args.value
			});
			break;

		default:
			break;

	};

	return textField;
}

exports.createButton = function(_args) {

	var button = Ti.UI.createButton({
		title : _args.title,
		backgroundColor : _args.backgroundColor || '#c0c0c0',
		bottom : _args.bottom || '5',
		top : _args.top || '5',
		left : _args.left || Ti.UI.CENTER,
		height : _args.height || Ti.UI.SIZE,
		width : _args.width || Ti.UI.SIZE,
		backgroundImage : imagePath + _args.image,
		font : {
			fontSize : 20,
			fontStyle : 'normal',
			fontWeight : 'bold'
		}

	});
	return button;

}

exports.createFormRow = function(_args) {

	var view = Ti.UI.createView({
		backgroundColor : 'white',
		top : '0',
		left : 5,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		layout : 'vertical'
	});

	var type;

	switch (_args.type) {

		case 'number':

			var label = exports.createLabel({
				text : _args.name,
				type : 'text',
				left : 5,
				top : 2,
				bottom : 2
			});

			var tf = exports.createTextField({

				type : _args.type || 'text',
				top : 0,
				left : 5,
				hintText : _args.hintText,
				width : _args.width || Ti.UI.FILL,
				value : _args.value || ' ',
				editable : _args.editable || false
			});

			view.getValue = function() {

				return tf.value;
			}
			view.add(label);
			view.add(tf);
			break;

		case 'text':

			var label = exports.createLabel({
				text : _args.name,
				type : 'text',
				left : 5,
				top : 2,
				bottom : 2
			});

			var tf = exports.createTextField({

				type : _args.type || 'text',
				top : 0,
				left : 5,
				hintText : _args.hintText,
				width : _args.width || Ti.UI.FILL,
				value : _args.value || ' ',
				editable : _args.editable || false
			});

			view.getValue = function() {

				return tf.value;
			}

			view.add(label);
			view.add(tf);
			break;

		case 'checkbox':

			var label = exports.createLabel({
				text : _args.name,
				type : 'text',
				left : 5,
				top : 2,
				bottom : 2
			});

			var checkbox = exports.createSwitch({
				value : _args.value
			});

			view.getValue = function() {

				return checkbox.value;
			};
			view.add(label);
			view.add(checkbox);

			break;

		default:
			break;

	};

	return view;

};

exports.createSwitch = function(_args) {

	var checkBox = Ti.UI.createSwitch({

		//style : Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
		value : _args.value,
		title : _args.title,
		titleOff : _args.titleOff,
		titleOn : _args.titleOn

	});

	return checkBox;
};

