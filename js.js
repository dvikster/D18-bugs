/**
 * Created by StudentGoIT on 17.05.2017.
 */

var bug= document.querySelector('#bug');
var x = 140;
var y = 140;
var direction;
var bugMove;

function fBugMove(){
    direction = Math.floor(Math.random() * 4 + 1);
    if( direction == 1 && x!=0 ){
        x -= 20;
        bug.style.left = x+'px';
    }
    else if( direction == 2 && x!=280 ){
        x += 20;
        bug.style.left = x+'px';
    }
    else if( direction == 3 && y!=0){
        y -= 20;
        bug.style.top = y+'px';
    }
    else if( direction == 4 && y!=280){
        y += 20;
        bug.style.top = y+'px';
    }
    bugMove = setTimeout(fBugMove,20);
}
fBugMove();

document.querySelector('#stop').onclick = function (event) {
    clearTimeout(bugMove);
    console.log('Y: ' + y);
    console.log('X: ' + x);

}

function moveBugKey(event) {
    event.preventDefault();
    console.log(event);
    if(event.key == 'ArrowRight' && x<285 ){
        x +=10;
        console.log('X: ' + x);
        bug.style.left = x+'px';
    }
    else if(event.key == 'ArrowLeft' && x>0){
        x -=10;
        console.log('X: ' + x);
        bug.style.left = x+'px';
    }
    if(event.key == 'ArrowDown' && y<285){
        y +=10;
        console.log('Y: ' + y);
        bug.style.top = y+'px';
    }
    else if(event.key == 'ArrowUp' && y>0){
        y -=10;
        console.log('Y: ' + y);
        bug.style.top = y+'px';
    }
}
document.addEventListener('keydown', moveBugKey);
