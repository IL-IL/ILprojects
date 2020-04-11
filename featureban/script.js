let clickNumbers = 0;

function addPlayer() {                                  
    clickNumbers = ++clickNumbers; 
    const playerName = getPlayer(); 
    console.log ('PN=' + playerName+ ' CN='+clickNumbers);
    addPlayerToList(playerName);
    clearInput();
}

function getPlayer () {                                 
    const input = document.querySelector ('.player') 
    return input.value;
}

function addPlayerToList (playerName){
    const player = document.createElement ('li');
    player.innerText = playerName;
    const playerList = document.querySelector('.playerList');
    playerList.append(player);
}

function clearInput(){
    const playerName = document.querySelector ('.player');
    playerName.value = '';
}


function generateCard() {
    
    for (i=0; i<clickNumbers;i++){
        addCardToList();
    }
  
}

function addCardToList() {
    let genCard = (Math.round(Math.random())+1)
    let cardColor = (genCard === 1) ? 'red' : 'black';
    console.log (cardColor);
    
    const card = document.createElement ('li');
    const cardList = document.querySelector('.cardList');
    card.innerText = cardColor;
    cardList.append(card);
}



//function clearCard() {
//   
//  const card = document.querySelector('.cardList');
// console.log ('clearCard is on  ' + card);
// card.remove();
// addCardToList();
// }

