


function genrateCompChoice(){
 let randomNum = Math.random()*3;
 if(randomNum > 0 && randomNum <= 1){
     return 'bat🏏';
 }else if (randomNum > 1 && randomNum <= 2){
     return 'ball🥎';
 }else if (randomNum > 2 && randomNum <= 3){
     return 'stump |||'
 }

}
let strgetValue = localStorage.getItem('scores');
let scores;

dataStore(strgetValue);

function dataStore(strValue) {
 scores = strValue ? JSON.parse(strgetValue) :{
    user:0,
    comp:0,
    tie:0,
  };

  scores.displayScore = function () {
    return `👤User Scores ${scores.user}      🖥️Comp Score ${scores.comp}      🫂Tie Match ${scores.tie}`;
   }

   Showresult();
  
}


  
  





let winner= function(userMove, compMove){

  if(userMove === compMove){
    scores.tie++;
    return 'Match is tie 🫂';
  }else if (userMove === 'bat🏏' && compMove === 'ball🥎'){
    scores.user++;
    return 'User has won 🏆';
  }else if (userMove === 'bat🏏' && compMove === 'stump |||'){
    scores.comp++;
    return 'Comp has won 🏆';
  }else if (userMove === 'ball🥎' && compMove === 'bat🏏'){
    scores.comp++;
    return 'Comp has won 🏆';
  }else if (userMove === 'ball🥎' && compMove === 'stump |||'){
    scores.user++;
    return 'User has won 🏆';
  }else if (userMove === 'stump |||' && compMove === 'ball🥎'){
    scores.comp++;
    return 'Comp has won 🏆';
  }else if (userMove === 'stump |||' && compMove === 'bat🏏'){
    scores.user++;
    return 'User has won 🏆';
  }
};

// bat button

let batbtn = document.querySelector('#bat');

batbtn.addEventListener('click',()=>{
  
  let compChoice = genrateCompChoice();
  
  let result = winner('bat🏏', compChoice);
  Showresult('bat🏏',compChoice,result);
  
})


// ball button

let ballbtn = document.querySelector('#ball');

ballbtn.addEventListener('click',()=>{
  
 compChoice = genrateCompChoice();
  
 result = winner('ball🥎', compChoice);
  Showresult('ball🥎',compChoice,result);
})


// stump button

let stumpbtn = document.querySelector('#stump');

stumpbtn.addEventListener('click',()=>{
  
 compChoice = genrateCompChoice();
  
 result = winner('stump |||', compChoice);
  Showresult('stump |||',compChoice,result);
})


 function Showresult (userMove,compMove,result){

  localStorage.setItem('scores', JSON.stringify(scores));
 
  let user = document.querySelector('#user');
  user.innerText = userMove ? `👤 User has choose ${userMove}`: '';


  let comp = document.querySelector('#comp');
  comp.innerText = compMove ? `🖥️ Comp has choose ${compMove}` : '';


  let resultShow = document.querySelector('#result');
  resultShow.innerText = result ? `${result}` : '';

  let Scorebtn = document.querySelector('#score');
  Scorebtn.innerText = scores.displayScore();

}

let resetbtn = document.querySelector('#reset');

resetbtn.addEventListener('click', ()=>{
localStorage.clear();
dataStore();


})