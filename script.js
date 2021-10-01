var turn=1;
var black_count=0;
var score1=0;
var score2=0;
var red_count=0;
var nostrike1=0;
var nostrike2=0;
var foul1=0;
var foul2=0;
function startGame() {
  var whoseturnElement=document.getElementById("whoseturn");
  whoseturnElement.style.display="block";
  var startElement=document.getElementById("start");
  startElement.style.display="none";
  disableButton((turn.toString()%2)+1);
}
function disableButton(a){
  document.getElementById("strike"+a).disabled=true;
  document.getElementById("multistrike"+a).disabled=true;
  document.getElementById("redstrike"+a).disabled=true;
  document.getElementById("strikerstrike"+a).disabled=true;
  document.getElementById("defunctcoin"+a).disabled=true;
  document.getElementById("none"+a).disabled=true;
}
function enableButton(a){
  document.getElementById("whoseturn").innerHTML="Player "+a+"'s Turn";
  if(black_count<9){
  document.getElementById("strike"+a).disabled=false;
}
if(black_count+red_count<9){
  document.getElementById("multistrike"+a).disabled=false;
}
if(red_count!=1){
  document.getElementById("redstrike"+a).disabled=false;
}
  document.getElementById("strikerstrike"+a).disabled=false;
  document.getElementById("defunctcoin"+a).disabled=false;
  document.getElementById("none"+a).disabled=false;
}
function strike(n){
  if(black_count<9){
    document.getElementById("coin"+(black_count+1).toString()).src="img/ob.png";
    black_count=black_count+1;
    console.log(black_count);
  }
  if(n==1){
    enableButton('2');
    disableButton('1');
    score1=score1+1;
  }
  else {
    enableButton('1');
    disableButton('2');
    score2=score2+1;
  }
  checkWin();
}
function multistrike(n) {
  if(black_count<8){
    document.getElementById("coin"+(black_count+1).toString()).src="img/ob.png";
    document.getElementById("coin"+(black_count+2).toString()).src="img/ob.png";
    black_count=black_count+2;
  }
  else if(black_count<9 && red_count==0){
    document.getElementById("coin10").src="img/or.png";
    document.getElementById("redstrike"+n.toString()).disabled=true;
    red_count=red_count+1;
  }
  if(n==1){
    enableButton('2');
    disableButton('1');
    score1=score1+2;
  }
  else {
    enableButton('1');
    disableButton('2');
    score2=score2+2;
  }
  checkWin();
}
function redstrike(n) {
  if(red_count==0){
    document.getElementById("coin10").src="img/or.png";
    red_count=red_count+1;
    checkWin();
    console.log(red_count);
  }
  if(n==1){
    enableButton('2');
    disableButton('1');
    score1=score1+3;
  }
  else {
    enableButton('1');
    disableButton('2');
    score2=score2+3;
  }
  checkWin();
}
function strikerstrike(n) {
  if(n==1){
    nostrike1=nostrike1+1;
    enableButton('2');
    disableButton('1');
    score1=score1-1;
    foul1=foul1+1;
  }
  else {
    nostrike2=nostrike2+1;
    enableButton('1');
    disableButton('2');
    score2=score2-1;
    foul2=foul2+1;
  }
  checkWin();
  checkfoul();
  checknostrike();
}

function defunctcoin(n) {
  if(n==1){
    nostrike1=nostrike1+1;
    enableButton('2');
    disableButton('1');
    score1=score1-2;
  }
  else {
    nostrike2=nostrike2+1;
    enableButton('1');
    disableButton('2');
    score2=score2-2;
  }
  checkWin();
  checknostrike();
}

function nonefun(n) {
  if(n==1){
    nostrike1=nostrike1+1;
    enableButton('2');
    disableButton('1');
  }
  else {
    nostrike2=nostrike2+1;
    enableButton('1');
    disableButton('2');
  }
  checkWin();
  checknostrike();
  checkfoul();
}
function checknostrike() {
  if(nostrike1==3){
    score1=score1-1;
    nostrike1=0;
    foul1=foul1+1;
  }
  if(nostrike2==3){
    score2=score2-1;
    nostrike2=0;
    foul2=foul2+1;
  }
  checkfoul();
}

function checkfoul() {
  if(foul1==3){
    score1=score1-1;
    foul1=0;
  }
  if(foul2==3){
    score2=score2-1;
    foul2=0;
  }
}
function checkWin() {
  if(black_count+red_count==10){
    if(score1>score2){
      if((score1-score2)>=3){
        win("1");
      }
      else{
        window.alert("Match is Draw");
        disableButton('1');
        disableButton('2');
        playAgain();
      }
    }
    else if(score2>score1){
      if((score2-score1)>=3){
        win("2");
      }
      else{
        window.alert("Match is Draw");
        disableButton('1');
        disableButton('2');
        playAgain();
      }
  }
}
  else if(score1>=5 || score2>=5){
          if(score1>score2){
            if((score1-score2)>=3){
              win("1");
            }
          }
          else{
            if((score2-score1)>=3){
              win("2");
            }
          }
    }

}

function playAgain(){
  window.location.reload()
}
function win(winner) {
    window.alert("player "+winner+" wins");
    disableButton('1');
    disableButton('2');
    playAgain();
}
