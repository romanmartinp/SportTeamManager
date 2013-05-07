var Styles = require('/Styles');
var Ui = require('/Ui');
var PlayerDataWindow = require('/PlayerDataWindow');

exports.create = function() {
	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : "DATOS",
		layout : 'vertical'
	});

	var team = exports.createTeamSection();
	var players = exports.createPlayersSection();

	win.add(team);
	win.add(players);

	return win;

}

exports.createTeamSection = function() {
	var viewTeamSection = Ti.UI.createView({
		backgroundColor : '',
		top : '0',
		height : Ti.UI.SIZE,
		layout : 'vertical'

	});

	//header

	var labelTitle = Ui.createLabel({
		text : 'Equipo',
		type : 'header'
	});

	//Vista Datos de equipo

	var viewTeamName = Ui.createFormRow({

		name : 'Nombre: ',
		hintText : 'Nombre del equipo'
	});

	var viewClubName = Ui.createFormRow({

		name : 'Club: ',
		hintText : 'Nombre del club'
	});

	var viewCategory = Ui.createFormRow({

		name : 'Categoría: ',
		hintText : 'Categoría'
	})

	viewTeamSection.add(labelTitle);
	viewTeamSection.add(viewTeamName);
	viewTeamSection.add(viewClubName);
	viewTeamSection.add(viewCategory);

	return viewTeamSection;
};

exports.createPlayersSection = function() {
	var viewPlayersSection = Ti.UI.createView({
		backgroundColor : '',
		//top : '0',
		height : Ti.UI.SIZE,
		layout : 'vertical'

	});

	// Headers

	var labelTitle = Ui.createLabel({
		text : 'Jugadoras',
		type : 'header'
	});

	//crear botón

	var buttonAddPlayer = Ui.createButton({
		title : 'Añadir jugadora'
	});

	//añadir evento al botón

	buttonAddPlayer.addEventListener('touchstart', function(e) {
		var winPlayerData = PlayerDataWindow.create({
			//playerData : e.rowData.playerData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'data'
		});

		currentTab.open(winPlayerData);

	});

	//crear TableView

	var playersList = [{
		name : 'Carmen Martín',
		birthDate : '10/10/1983',
		number : '7',
		weigth : '70',
		heigth : '1,65',
		id : '1'
	}, {
		name : 'Laura Plaza',
		birthDate : '10/10/1984',
		number : '19',
		weigth : '60',
		heigth : '1,75',
		id : '2'
	}]
	var dataTable = [];
	for (var i = 0; i < playersList.length; i++) {
		var row = Ti.UI.createTableViewRow({
			title : playersList[i].name, //propiedad TI para que escriba algo en la row, las demás son nuestras
			playerData : playersList[i],
			editable : true
		});
		dataTable.push(row);
	};

	var tableView = Ti.UI.createTableView({
		data : dataTable,
		editable : true

	});

	tableView.addEventListener('click', function(e) {

		var winPlayerData = PlayerDataWindow.create({
			playerData : e.rowData.playerData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'data'
		});

		currentTab.open(winPlayerData);
	});

	tableView.addEventListener('delete', function(e) {

	});

	viewPlayersSection.add(labelTitle);
	viewPlayersSection.add(buttonAddPlayer);
	viewPlayersSection.add(tableView);

	return viewPlayersSection;
};

