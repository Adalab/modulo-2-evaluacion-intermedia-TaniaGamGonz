'use strict'

//Variables
let playerCounter = 0;
let pcCounter = 0;
let games = 0;
const  playerChoice = document.querySelector('.js-playerChoice');
const startBtn = document.querySelector('.js-startBtn');
const replayBtn = document.querySelector('.js-replayBtn');
const resultElement = document.querySelector('.js-resultado');
const playerPointsElement = document.querySelector('.js-playerPoints');
const pcPointsElement = document.querySelector('.js-pcPoints');   




//Functions
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function getPcChoice(){
     let pcChoice = getRandomNumber(99);

      if(pcChoice < 34){
          pcChoice = 'piedra'
      }else if (pcChoice < 64 ){
        pcChoice = 'papel'
      }else if (pcChoice > 63){
        pcChoice = 'tijera'
      }
      console.log(`El ordenador ha escogido ${pcChoice}.`);
      return pcChoice;
  }
  function getPlayerChoice(playerChoiceSelected){

       console.log(`El jugador ha escogido ${playerChoiceSelected}`);
       return playerChoiceSelected;
  }

  function play(playerChoice, pcChoice){
      games++;
    if(playerChoice === pcChoice){
        return 'Empate';
    }
    else if( playerChoice === 'tijera' && pcChoice === 'papel'){
        playerCounter++
        return '¡Has ganado!';

    }else if( playerChoice === 'piedra' && pcChoice === 'tijera'){
        playerCounter++
        return '¡Has ganado!';
    }
    else if( playerChoice === 'papel' && pcChoice === 'piedra'){
        playerCounter++
        return '¡Has ganado!';
    }

    else if( pcChoice === 'tijera' && playerChoice === 'papel'){
        pcCounter++
        return '¡Has perdido!';
    }
    else if( pcChoice === 'piedra' && playerChoice === 'tijera'){
        pcCounter++
        return '¡Has perdido!';
    }
    else if( pcChoice === 'papel' && playerChoice === 'piedra'){
        pcCounter++
        return '¡Has perdido!';
    }
  }
  function writeresults(){
        resultElement.innerHTML=play(getPlayerChoice(playerChoice.value),getPcChoice())
        playerPointsElement.innerHTML=`Jugador: ${playerCounter}`;
        pcPointsElement.innerHTML=`Ordenador: ${pcCounter}`;    
  }

  function disableGame(){  if(games > 10){
    startBtn.classList.add('hidden');
    replayBtn.classList.remove('hidden'); 
    replayBtn.addEventListener('click' , enableGame);
  }
}
function enableGame(){
    games = 0;
    playerCounter = 0;
    pcCounter = 0;
    playerPointsElement.innerHTML=`Jugador: ${playerCounter}`;
    pcPointsElement.innerHTML=`Ordenador: ${pcCounter}`;  
    resultElement.innerHTML = '';  
    replayBtn.classList.add('hidden');
    startBtn.classList.remove('hidden'); 
}

function disableStartButton(playerChoice){
    if(playerChoice){
        startBtn.disabled = false;
    }
}


  //Listeners and code
 
  playerChoice.addEventListener('change', (event)=>{
      console.log(event.target.value);
      disableStartButton(event.target.value);
  })
  startBtn.addEventListener('click', (event)=>{
      event.preventDefault();
      writeresults();
      disableGame();
  })



