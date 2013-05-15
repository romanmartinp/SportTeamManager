var PlayersListWindow = require('/PlayersListWindow');
var MatchesListWindow = require('/MatchesListWindow');
var StadisticsWindow = require('/StadisticsWindow');
var tabPlayersList;
var tabMatches;
var tabStadistics;

exports.createTabGroup = function() {

	var tabGroup = Ti.UI.createTabGroup();

	var winPlayersList = PlayersListWindow.create();

	var winMatchesList = MatchesListWindow.create();

	var winStadistics = StadisticsWindow.create();

	tabPlayersList = Ti.UI.createTab({
		title : "Datos",
		icon : "/images/playersListIcon.png",
		window : winPlayersList
	});

	tabMatchesList = Ti.UI.createTab({
		title : "Partidos",
		icon : "/images/matchesIcon.png",
		window : winMatchesList
	});

	tabStadistics = Ti.UI.createTab({
		title : "Estadisticas",
		icon : "/images/stadisticsIcon.png",
		window : winStadistics
	});

	Ti.App.addEventListener('tabGroup:openWindow', function(e) {
		alert('Tab ' + e.tab + 'ventana ' + e.win);
	})

	tabGroup.addTab(tabPlayersList);
	tabGroup.addTab(tabMatchesList);
	tabGroup.addTab(tabStadistics);

	return tabGroup;

}

exports.getTab = function(_args) {

	switch (_args.tabName) {
		case 'playersList':
			return tabPlayersList;
			break

		case 'matches':
			return tabMatchesList;
			break

		case 'Stadistics':
			return tabStadistics;
			break

	}

}
