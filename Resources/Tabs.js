var DataWindow = require('/DataWindow');
var MatchesWindow = require('/MatchesWindow');
var StadisticsWindow = require('/StadisticsWindow');
var tabData;
var tabMatches;
var tabStadistics;

exports.createTabGroup = function() {

	var tabGroup = Ti.UI.createTabGroup();

	var winData = DataWindow.create();

	var winMatches = MatchesWindow.create();

	var winStadistics = StadisticsWindow.create();

	tabData = Ti.UI.createTab({
		title : "Datos",
		icon : "KS_nav_ui.png",
		window : winData
	});

	tabMatches = Ti.UI.createTab({
		title : "Partidos",
		icon : "KS_nav_ui.png",
		window : winMatches
	});

	tabStadistics = Ti.UI.createTab({
		title : "Estadisticas",
		icon : "KS_nav_views.png",
		window : winStadistics
	});

	Ti.App.addEventListener('tabGroup:openWindow', function(e) {
		alert('Tab ' + e.tab + 'ventana ' + e.win);
	})

	tabGroup.addTab(tabData);
	tabGroup.addTab(tabMatches);
	tabGroup.addTab(tabStadistics);

	return tabGroup;

}

exports.getTab = function(_args) {

	switch (_args.tabName) {
		case 'data':
			return tabData;
			break

		case 'matches':
			return tabMatches;
			break

		case 'Stadistics':
			return tabStadistics;
			break

	}

}
