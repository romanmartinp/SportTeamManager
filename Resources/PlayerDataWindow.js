var Ui = require('/Ui');
var Styles = require('/Styles');

exports.create = function(_args) {

	var playerData = _args.playerData || {};

	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : playerData.name || 'Añadir nueva jugadora',
		layout : 'vertical'
	});

	var name = Ui.createFormRow({
		name : 'Nombre',
		hintText : 'Jugador/a',
		value : playerData.name
	});
	var number = Ui.createFormRow({
		name : 'Número',
		hintText : 'Número',
		value : playerData.number
	});
	var birthDate = Ui.createFormRow({
		name : 'F. de nacimiento',
		hintText : 'F. de nacimiento',
		value : playerData.birthDate
	});

	win.add(name);
	win.add(number);
	win.add(birthDate);

	return win;

}
