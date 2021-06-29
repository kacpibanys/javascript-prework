function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
}

function displayResult(argPlayerMove, argComputerMove){
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
        printMessage('Przegrywasz :(');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis :|');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
        printMessage('Przegrywasz :(');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
        printMessage('Przegrywasz :(')
    }
  
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    var computerMove, randomNumber;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    if (randomNumber == '1') {
      computerMove = 'kamień';
    } else if (randomNumber == '2') {
      computerMove = 'papier';
    } else if (randomNumber == '3') {  
      computerMove = 'nożyce' 
    }
    printMessage('Mój ruch: ' + computerMove);
}