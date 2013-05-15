var Ui = require('/Ui');
var Styles = require('/Styles');

exports.create = function(_args) {

	var playerData = _args.playerData || {};

	var editMode = typeof _args.playerData !== 'undefined';

alert("editMode es " + editMode)

	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : playerData.name || 'Nueva jugadora',
		layout : 'vertical'
	});

	var buttonSavePlayer = Ui.createIcon({
		image : 'buttonAddPlayer.png',
		type : 'header'

	});

	win.rightNavButton = buttonSavePlayer;

	buttonSavePlayer.addEventListener('click', function(e) {//No funciona con touchstart
		
		var currentPlayersList = Storage.getValue('playersList') || [];
		var newPlayerData = {
			name : tfName.getValue(),
			surname : tfSurname.getValue(),
			birthDate : tfBirthDate.getValue(),
			number : tfNumber.getValue(),
			telephone : tfTelephone.getValue(),
			email : tfEmail.getValue(),
			address : tfAddress.getValue()
		};

		if (editMode) {
			// Dorsal actual de la jugadora antes de editar
			var number = playerData.number; 
			
			// Buscamos esta jugadora dentro de la lista
			for(var i=0, l=currentPlayersList.length; i<l; i++){
				var player = currentPlayersList[i];
				// Cuando la encontramos, sustiuimos sus datos dentro de la lista por los nuevos datos
				if(player.number === number){
					currentPlayersList[i] = newPlayerData;
					break;
				}
			}
			
		} else {
			currentPlayersList.push(newPlayerData);
		}


		Storage.setValue('playersList', currentPlayersList);
		Ti.App.fireEvent('playersList:updated', {});

		win.close();

	});

	var scrollView = Ti.UI.createScrollView({
		layout : 'vertical'
	});

	var headerViewNameImage = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		layout : 'horizontal',
		//backgroundColor : 'black'
	});

	var headerViewName = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : '60%',
		layout : 'vertical',
		//backgroundColor : 'blue'
	});

	var photo = Ti.UI.createImageView({
		width : '37%',
		height : 100,
		top : 5,
		right : '3%',
		//backgroundColor : 'red',
		image : 'images/carmenMartin.jpeg'
	});

	var tfName = Ui.createFormRow({
		name : 'Nombre',
		hintText : 'Jugador/a',
		value : playerData.name,
		type : 'text',
		width : '60%',
		top : 5
	});

	var tfSurname = Ui.createFormRow({
		name : 'Apellidos',
		hintText : 'Apellidos',
		value : playerData.surname,
		type : 'text',
		width : '60%',
		top : 50
	});

	var tfNumber = Ui.createFormRow({
		name : 'Número',
		hintText : 'Número',
		value : playerData.number,
		type : 'number',
		width : '15%'
	});
	var tfBirthDate = Ui.createFormRow({
		name : 'F. de nacimiento',
		hintText : 'F. de nacimiento',
		value : playerData.birthDate,
		type : 'number',
		width : '50%'
	});

	var tfTelephone = Ui.createFormRow({
		name : 'Telefono',
		hintText : 'Telefono',
		value : playerData.telephone,
		type : 'number',
		width : '50%'
	});

	var tfEmail = Ui.createFormRow({
		name : 'e-mail',
		hintText : 'e-mail',
		value : playerData.email,
		type : 'text'
	});

	var tfAddress = Ui.createFormRow({
		name : 'Dirección',
		hintText : 'Dirección',
		value : playerData.address,
		type : 'text'
	});

	win.add(scrollView);

	headerViewName.add(tfName);
	headerViewName.add(tfSurname);
	headerViewNameImage.add(headerViewName);
	headerViewNameImage.add(photo);

	scrollView.add(headerViewNameImage);
	scrollView.add(tfNumber);
	scrollView.add(tfBirthDate);
	scrollView.add(tfTelephone);
	scrollView.add(tfEmail);
	scrollView.add(tfAddress);

	return win;

}
