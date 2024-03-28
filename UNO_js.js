//put variables etc here
let playerName;
const playerNamesArray = [];
let playerIndex;
let gameID;



// Modal Dialogue for player names

let myModal = new bootstrap.Modal(document.getElementById('playerNames'));

document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();



    });

console.log('hello!')
    //Creating Players

    function createPlayer() {

        let error = 0;

        var player1 = document.getElementById('player1').value.trim();
        var player2 = document.getElementById('player2').value.trim();
        var player3 = document.getElementById('player3').value.trim();
        var player4 = document.getElementById('player4').value.trim();
  
        if (player1 === '' || player2 === '' || player3 === '' || player4 === '') {
            showError('Please type in all of your friends names');
            return;
          }
          
          if (player1 === player2 || player1 === player3 || player1 === player4 || player2 === player3 || player2 === player4 || player3 === player4) {
            showError('Everyone is an individual snowflake! So use other names.');
            return;
          }
          
          console.log('Player 1:', player1);
          console.log('Player 2:', player2);
          console.log('Player 3:', player3);
          console.log('Player 4:', player4);
        };

        if ( error == 0)
        {
            myModal.hide();
            console.log(playerNamesArray)
        }
    

    //start Game

    async function startGame(){

        const response = await fetch("https://nowaunoweb.azurewebsites.net/api/game/start", {
        method: 'POST',
        body: JSON.stringify(playerNames),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    
    if (response.ok) {
        result = await response.json();
        gameID = result.Id;
        console.log(result);
        alert(JSON.stringify(result));
    }
    else {
        alert("HTTP-Error: "+ response.status);
    }
    }

    //Path for cards
    const CardsPath = "./uno_karten_originaldesign/";

    function buildCardDeck(color, number) {
        return `${CardsPath}${color + number}.png`;
    }