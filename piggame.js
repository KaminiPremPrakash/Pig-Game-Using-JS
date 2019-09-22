var scores, roundScore, activeplayer;

scores = [0, 0];
roundScore = 0;
activeplayer = 0;
//dice = Math.floor(Math.random() * 6) + 1; // to generate numbs from 1 to 6 randomly
//document.querySelector('#current-' + activeplayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
//to hide the dice
document.querySelector('.dice').style.display = "none";
//we dont write btn() bcz we dont want to call it, it will be called by event listener

//document.querySelector('.btn-roll').addEventListener('click', btn);

//we can  write an anonymous fcn istead of btn// anonymous fcn cant be used again
document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1; //create a random number between 1-6
    document.querySelector('.dice').style.display = "block";
    document.querySelector('.dice').src = 'dice' + dice + '.png';

    if (dice > 1) {
        //add score
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activeplayer).textContent = roundScore;
    } else {
        //goes to next player
        switchPlayer();


    }

});

document.querySelector('.btn-roll').addEventListener('click', function() {
    //add current score to player's global score
    scores[activeplayer] += roundScore;
    //update the user interface
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
    //check if player won the game
    if (scores[activeplayer] >= 100) {
        document.querySelector('#name-' + activeplayer).textContent = 'Winner!!!';
        document.querySelector('#name-' + activeplayer).style.color = "Red";
        document.querySelector('#name-' + activeplayer).style.fontweight = "Bold";
    }
    switchPlayer();

});

//setting scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-0').textContent = '0'

function switchPlayer() {
    roundScore = 0;
    if (activeplayer === 0) {
        activeplayer = 1;
    } else {
        activeplayer = 0;
    }
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //toggling to show active/inactive
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = "none";
};