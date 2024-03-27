//put variables etc here
let playerName;
const playerNamesArray = [];
let playerIndex;
let gameID;



// Modal Dialogue for player names

let myModal = new bootstrap.Modal(document.getElementById('playerNames'));
myModal.show();

document.getElementById('playerForm').addEventListener('submit', async function (evt)
 {
    evt.preventDefault();



    });


    //Creating Players

    function createPlayer() {

        let error = 0;

        for (let i = 1; i<=4; i++)
        {
            const playerName = document.getElementById(`playerName${i}`).value;

            if(!playerName[i])
            {
                alert('Please enter all player names.');
                 return;
            }

            if(playerNamesArray.includes(playerName))
            {
                alert('Please enter all player names.');
                 return;
            }

            playerNamesArray.push(playerName);
        }

        if ( error == 0)
        {
            myModal.hide();
        }
    }

    //start Game

    async function startGame(){

        const response = await fetch("https://nowaunoweb.azurewebsites.net/api/game/start", {
        method: 'POST',
        body: JSON.stringify(playerNamesArray),
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

    startGame();