var Styles = require('/Styles');
var Ui = require('/Ui');
var MatchDataWindow = require('/MatchDataWindow');

var win;

exports.create = function() {
	win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : "PARTIDOS",
		layout : 'vertical'
	});

	//Crear Secciones
	
	var matches = exports.createMatchesSection();

	//Añadir Secciones

	//win.add(team);
	win.add(matches);

	return win;

}



exports.createMatchesSection = function() {
	var viewMatchesSection = Ti.UI.createView({
		//backgroundColor : '',
		top : '0',
		height : Ti.UI.SIZE,
		layout : 'vertical'

	});

	// Headers

	//	var labelTitle = Ui.createHeader({
	//	type : 'header',
	// image: 'headerPlayersList.png'
	// });

	//crear botón

//El icono es el mismo que add Player de momento...


	var buttonAddMatch = Ui.createIcon({
		image : 'buttonAddPlayer.png',
		type : 'header'

	});

	win.rightNavButton = buttonAddMatch

//añadir evento al botón

	buttonAddMatch.addEventListener('click', function(e) {//No funciona con touchstart
		alert('dentro ButtonAddMatch');
		var winMatchData = MatchDataWindow.create({
			//playerData : e.rowData.playerData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'matches'
		});

		currentTab.open(winMatchData);

	});

	//crear TableView

	var matchesList = [{
		name : 'Los Olivos - Granada',
		stadium: 'Los Olivos',
		date : '14/10/2013',
		periods : '2',
		periodTime: '30',
		timer:'up',
		competition: true,
		id : '1'
	}, {
		name : 'Almería - Los Olivos',
		stadium: 'Vicar',
		date : '19/12/2013',
		periods : '2',
		periodTime: '30',
		timer:'up',
		competition: true,
		id : '2'
	}]
	var dataTable = [];
	for (var i = 0; i < matchesList.length; i++) {
		var row = Ti.UI.createTableViewRow({
			title : matchesList[i].name, //propiedad TI para que escriba algo en la row, las demás son nuestras
			matchData : matchesList[i],
			editable : true
		});
		dataTable.push(row);
	};

	var tableView = Ti.UI.createTableView({
		data : dataTable,
		editable : true

	});

	tableView.addEventListener('click', function(e) {

		var winMatchData = MatchDataWindow.create({
			matchData : e.rowData.matchData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'matches'
		});

		currentTab.open(winMatchData);
	});

	tableView.addEventListener('delete', function(e) {

	});

	//viewPlayersSection.add(labelTitle);
	//viewPlayersSection.add(buttonAddPlayer);
	viewMatchesSection.add(tableView);

	return viewMatchesSection;
};

