// alert("file connected");

var scores,roundscore,activePlayer,winningScore,gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click',function() {
    if(gamePlaying) {
         console.log('hello');
    var number=Math.floor((Math.random()*6)+1);
    var diceDom=document.querySelector('img');
    diceDom.src='./images/dice-'+number+'.png';
    diceDom.style.display='block';
    
    if(number!==1) {
        roundscore+=number;
        document.querySelector('#current-'+activePlayer).innerText=roundscore;
    } else{
        nextPlayer();
       
    }
   
}
});
    
   

document.querySelector(".btn-hold").addEventListener('click',function() {
    if(gamePlaying) {
        document.querySelector('img').style.display='none';
        scores[activePlayer]+=roundscore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        document.querySelector("#current-"+activePlayer).textContent=0;
        if(scores[activePlayer]>=winningScore) {
            document.querySelector('#name-'+activePlayer).textContent="Winner!"
            gamePlaying=false;
        } else{
             nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener('click',function() {
   
    document.querySelector('#name-'+activePlayer).textContent="Player "+(activePlayer+1);
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    init();
});
    
   function nextPlayer() {
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    document.querySelector('#current-'+activePlayer).innerText=0;
    activePlayer===0 ? activePlayer=1:activePlayer=0;

    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    roundscore=0;
   }

function init() {
    gamePlaying=true;
    winningScore=100;
    scores=[0,0];
    roundscore=0;
    activePlayer=0;
    document.querySelector('img').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    
}
  
