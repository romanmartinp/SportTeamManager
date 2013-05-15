var Ui = require('/Ui');
var Styles = require('/Styles');

exports.create = function(_args) {

	var playerData = _args.playerData || {};

	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : playerData.name || 'Nueva jugadora',
		layout : 'vertical'
	});

	var scrollView = Ti.UI.createScrollView({
		layout : 'vertical'
	});
	var headerViewName = Ti.UI.createView({
		height : Ti.UI.SIZE,
		//width: Ti.UI.SIZE,
		layout : 'vertical',
		background: 'blue'
	});

	var headerViewNameImage = Ti.UI.createView({
		height : Ti.UI.SIZE,
	//	width: Ti.UI.SIZE,
		layout : 'horizontal',
		background: 'black'
	});

	var name = Ui.createFormRow({
		name : 'Nombre',
		hintText : 'Jugador/a',
		value : playerData.name,
		type : 'text',
		width : '60%',
		top : 5
	});

	var surname = Ui.createFormRow({
		name : 'Apellidos',
		hintText : 'Apellidos',
		value : playerData.surname,
		type : 'text',
		width : '60%',
		top : 50
	});

	var number = Ui.createFormRow({
		name : 'Número',
		hintText : 'Número',
		value : playerData.number,
		type : 'number',
		width : '15%'
	});
	var birthDate = Ui.createFormRow({
		name : 'F. de nacimiento',
		hintText : 'F. de nacimiento',
		value : playerData.birthDate,
		type : 'number',
		width : '50%'
	});

	var telephone = Ui.createFormRow({
		name : 'Telefono',
		hintText : 'Telefono',
		value : playerData.telephone,
		type : 'number',
		width : '50%'
	});

	var email = Ui.createFormRow({
		name : 'e-mail',
		hintText : 'e-mail',
		value : playerData.email,
		type : 'text'
	});

	var address = Ui.createFormRow({
		name : 'Dirección',
		hintText : 'Dirección',
		value : playerData.address,
		type : 'text'
	});

	var photo = Ti.UI.createImageView({
		width : 75,
		height : 100,
		//top : 5,
	//	right : 5,
		backgroundColor : 'red',
		backgroundSelectedImage : 'images/carmenMartin.jpg'
	});

	win.add(scrollView);
	
	headerViewName.add(name);
	headerViewName.add(surname);
	//headerViewNameImage.add(headerViewName);
	//headerViewNameImage.add(photo);

	scrollView.add(headerViewName);
	scrollView.add(number);
	scrollView.add(birthDate);
	scrollView.add(telephone);
	scrollView.add(email);
	scrollView.add(address);

	scrollView.add(photo);

	return win;

}
