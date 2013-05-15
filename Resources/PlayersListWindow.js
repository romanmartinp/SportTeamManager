var Styles = require('/Styles');
var Ui = require('/Ui');
var PlayerDataWindow = require('/PlayerDataWindow');

var win;

exports.create = function() {
	win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : "JUGADORES",
		layout : 'vertical'
	});

	//Crear Secciones
	//var team = exports.createTeamSection();
	var players = exports.createPlayersSection();

	//Añadir Secciones

	//win.add(team);
	win.add(players);

	return win;

}

exports.createTeamSection = function() {
	var viewTeamSection = Ti.UI.createView({
		//backgroundColor : '',
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

	var buttonAddPlayer = Ui.createIcon({
		image : 'buttonAddPlayer.png',
		type : 'header'

	});

	win.rightNavButton = buttonAddPlayer

	//añadir evento al botón

	buttonAddPlayer.addEventListener('click', function(e) {//No funciona con touchstart

		var winPlayerData = PlayerDataWindow.create({
			//playerData : e.rowData.playerData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'playersList'
		});

		currentTab.open(winPlayerData);

	});

	//crear TableView

	Ti.App.addEventListener('playersList:updated', function(e) {

		setTableData();
	});
	
	var tableView = Ti.UI.createTableView({

		editable : true

	});

	function setTableData() {

		var playersList = Storage.getValue('playersList') || [];

		var dataTable = [];
		for (var i = 0; i < playersList.length; i++) {
			var row = Ti.UI.createTableViewRow({
				title : playersList[i].number + ' ' + playersList[i].surname + ' ' + playersList[i].name, //propiedad TI para que escriba algo en la row, las demás son nuestras
				playerData : playersList[i],
				editable : true
			});
			dataTable.push(row);
		};


		tableView.data = dataTable;

	}

	setTableData();

	tableView.addEventListener('click', function(e) {

		var winPlayerData = PlayerDataWindow.create({
			playerData : e.rowData.playerData
		});
		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'playersList'
		});

		currentTab.open(winPlayerData);
	});

	tableView.addEventListener('delete', function(e) {

	});

	//viewPlayersSection.add(labelTitle);
	//viewPlayersSection.add(buttonAddPlayer);
	viewPlayersSection.add(tableView);

	return viewPlayersSection;
};

