var AIchoice,scissor, rock, paper, display0, display1, score1, score2;

scissor = '<img src="bg/scissor.png">';
paper = '<img src="bg/paper.png">';
rock = '<img src="bg/rock.png">';
display0 = document.getElementById('display0');
display1 = document.getElementById('display1');
score0 = document.getElementById('score0');
score1 = document.getElementById('score1');
AIchoice = [scissor, rock, paper];
score0.innerHTML = 0;
var score1p = 0;
var score0p = 0;
score1.innerHTML = 0;

function op1(){
    display0.innerHTML = scissor;
    AI();
}
function op2(){
    display0.innerHTML = rock;
    AI();
}
function op3(){
    display0.innerHTML = paper;
    AI();
}
function AI(){
    AIpoints = Math.floor(Math.random() * 3);
    display1.innerHTML = AIchoice[AIpoints];
    console.log(AIpoints);
    if(display0.innerHTML === display1.innerHTML){
        console.log('tie');
    }
    if(display0.innerHTML === scissor && display1.innerHTML === rock){
        console.log('you lose');
        score1.innerHTML++;
        score1p++;
    }
    if(display0.innerHTML === scissor && display1.innerHTML === paper){
        console.log('you win');
        score0.innerHTML++;
        score0p++;
    }
    if(display0.innerHTML === paper && display1.innerHTML === scissor){
        console.log('you lose');
        score1.innerHTML++;
        score1p++;
    }
    if(display0.innerHTML === paper && display1.innerHTML === rock){
        console.log('you win');
        score0.innerHTML++;
        score0p++;
    }
    if(display0.innerHTML === rock && display1.innerHTML === paper){
        console.log('you lose');
        score1.innerHTML++;
        score1p++;
    }
    if(display0.innerHTML === rock && display1.innerHTML === scissor){
        console.log('you win');
        score0.innerHTML++;
        score0p++;
    }
    if(score0p === 20 && score1p < 20){
        document.getElementById('result').textContent = 'Player 1 win';

    }
    if(score0p < 20 && score1p === 20){
        document.getElementById('result').textContent = 'Player 1 lose';
    }
}
function reset(){
    display0.innerHTML = '';
    display1.innerHTML = '';
    score0.innerHTML = 0 ;
    score1.innerHTML = 0 ;
    document.getElementById('result').textContent = '';
}