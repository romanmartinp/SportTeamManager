var Ui = require('/Ui');
var Styles = require('/Styles');

exports.create = function(_args) {

	var matchData = _args.matchData || {};

	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : matchData.name || 'Nuevo partido',
		layout : 'vertical'
	});

	var scrollView = Ti.UI.createScrollView({
		layout : 'vertical'
	});
	// var headerViewName = Ti.UI.createView({
		// height : Ti.UI.SIZE,
		// width: Ti.UI.SIZE,
		// layout : 'vertical',
		// background: 'blue'
	// });
// 
	// var headerViewNameImage = Ti.UI.createView({
		// height : Ti.UI.SIZE,
		// width: Ti.UI.SIZE,
		// layout : 'horizontal',
		// background: 'black'
	// });

	var name = Ui.createFormRow({
		name : 'Partido',
		hintText : 'Partido',
		value : matchData.name,
		type : 'text',
		width : '60%',
		top : 5
	});

	var stadium = Ui.createFormRow({
		name : 'Lugar',
		hintText : 'Pabellón',
		value : matchData.stadium,
		type : 'text',
		width : '60%',
		top : 50
	});

	var date = Ui.createFormRow({
		name : 'Fecha',
		hintText : 'Fecha',
		value : matchData.date,
		type : 'number',
		width : '50%'
	});
	
	var periods = Ui.createFormRow({
		name : 'Periodos',
		hintText : 'nº',
		value : matchData.periods,
		type : 'number',
		width : '50%'
	});

	var periodTime = Ui.createFormRow({
		name : 'Duración periodo',
		hintText : 'Nº',
		value : matchData.periodTime,
		type : 'number',
		width : '50%'
	});

	var timer = Ui.createFormRow({
		name : 'Crono',
		//hintText : 'Crono',
		tittleOn : 'Atrás',
		tittleOff: 'Adelante',
		value : matchData.timer,
		type : 'checkbox'
	});

	var competition = Ui.createFormRow({
		name : 'Competición',
		title: 'Amistoso/Competición',
		titleOn : 'Sí',
		titleOff: 'No',
		value : matchData.competition,
		type : 'checkbox'
	});

	
	win.add(scrollView);
	
	// headerViewName.add(name);
	// headerViewName.add(surname);
	//headerViewNameImage.add(headerViewName);
	//headerViewNameImage.add(photo);

	// scrollView.add(headerViewName);
	scrollView.add(name);
	scrollView.add(stadium)
	scrollView.add(date);
	scrollView.add(periods);
	scrollView.add(periodTime);
	scrollView.add(timer);
	scrollView.add(competition);

	//scrollView.add(photo);

	return win;

}
