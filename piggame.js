var scores, roundScore, activeplayer, gamePlaying;

reset(); //to initialize variables

//document.querySelector('.btn-roll').addEventListener('click', btn);

//we can  write an anonymous fcn istead of btn// anonymous fcn cant be used again
document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        var dice = Math.floor(Math.random() * 6) + 1; //create a random number between 1-6
        // var diceDOM = document.querySelector('.dice')
        document.querySelector('.dice').style.display = "block";
        document.querySelector('.dice').src = 'dice' + dice + '.png';

        if (dice !== 1) {
            //add score
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activeplayer).textContent = roundScore;
        } else {
            //goes to next player
            switchPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    //add current score to player's global score
    scores[activeplayer] += roundScore;
    //update the user interface
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
    //check if player won the game
    if (scores[activeplayer] >= 50) {
        document.querySelector('#name-' + activeplayer).textContent = 'Winner!!! Congratulations!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
        switchPlayer();
    }

});



function switchPlayer() {
    if (activeplayer === 0) {
        activeplayer = 1;
    } else {
        activeplayer = 0;
    }
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //toggling to show active/inactive
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = "none";
};

document.querySelector('.btn-new').addEventListener('click', reset);

function reset() {
    score = [0, 0];
    activeplayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = "none";
    //setting scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}