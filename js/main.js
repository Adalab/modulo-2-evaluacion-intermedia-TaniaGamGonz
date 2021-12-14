'use strict'

//Variables
let playerChoice;
let pcChoice = '';
let playerCounter = 0;
let pcCounter = 0;
let games = 0;
const startBtn = document.querySelector('.js-startBtn');
const replayBtn = document.querySelector('.js-replayBtn');
const result = document.querySelector('.js-resultado');
const playerPoints = document.querySelector('.js-playerPoints');
const pcPoints = document.querySelector('.js-pcPoints');   




//Functions
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function getPcChoice(){
      pcChoice = getRandomNumber(99);

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
  function getPlayerChoice(){
       playerChoice = document.querySelector('.js-playerChoice').value;
       console.log(`El jugador ha escogido ${playerChoice}`);
       return playerChoice;
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
  function writeResults(){
        result.innerHTML=play(getPlayerChoice(),getPcChoice())
        playerPoints.innerHTML=`Jugador: ${playerCounter}`;
        pcPoints.innerHTML=`Ordenador: ${pcCounter}`;    
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
    playerPoints.innerHTML=`Jugador: ${playerCounter}`;
    pcPoints.innerHTML=`Ordenador: ${pcCounter}`;  
    result.innerHTML = '';  
    replayBtn.classList.add('hidden');
    startBtn.classList.remove('hidden'); 
}


  //Listeners and code


  startBtn.addEventListener('click', (event)=>{
      event.preventDefault();
      writeResults();
      disableGame();
  })


