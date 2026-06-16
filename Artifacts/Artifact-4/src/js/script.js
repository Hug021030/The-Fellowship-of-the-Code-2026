
function useItem() {
  alert('You are unable to use this Item at the moment');
}

//health von member
let health = 70;

//Kann man die use Button Funktionen evtl gemeinsam generalisieren?
//item number list so wie sie am refresh drinn sind:
let itemsList =['4', '7', '26', '9', '420', '12', '5', '3', '2', '11', '1', '67', '5', '1', '29', '123'];
function useHealth(){
    //einheitliche function für alle die die health vergrößern?
}

let bandageNr = 7;
function useBandage(){
    if(health > 91){
        console.log('Health über 100');
        alert('Cant use this item, already healthy enough')
    }
    else if(bandageNr == 0){
        console.log('no more bandages');
        alert('You dont have any bandages left')
    }
    else {
        health += 10;
        bandageNr = bandageNr - 1;
        console.log('health: ' + health + ' bandage nr: ' + bandageNr);
        //setzen healthbar
        document.querySelector('#healtBarText').textContent = health + '%';
        document.getElementById('healthBarWidth').style.width = health + '%';
        document.querySelector('#bandageNR').textContent = bandageNr + 'x';
    }
}

let breadNR = 26;
function eatBread(){
    if(health > 98){
        console.log('Health über 100');
        alert('Cant use this item, already healthy enough')
    }
    else if(breadNR == 0){
        console.log('no more bread');
        alert('You dont have any bread left')
    }
    else {
        health += 2;
        breadNR = breadNR - 1;
        //setzen healthbar
        document.querySelector('#healtBarText').textContent = health + '%';
        document.getElementById('healthBarWidth').style.width = health + '%';
        document.querySelector('#breadNR').textContent = breadNR + 'x';
    }
}

let cake = 12; 
function eatCake(){
    if(breadNR == 0){
        console.log('no more bread');
        alert('You dont have any bread left')
    }
    else
    eat(cake, 5)
}

//doesnt work yet 
function eat(whatEaten, healtinput){
        
    if(health += healtinput > 100){
        console.log('health to high');
        return;
    }
    health += healtinput;
        whatEaten = whatEaten - 1;
        var whatEatenNR = '' + whatEaten + 'NR';
        //setzen healthbar
        document.querySelector('#healtBarText').textContent = health + '%';
        document.getElementById('healthBarWidth').style.width = health + '%';
}

let ales = 3;
let blurred = 0;
function useAle(){
    if(ales > 0){
        ales = ales - 1;
        blurred += 0.8;
        console.log(blurred);
        document.body.style.filter = `blur(${blurred}px)`;
        document.querySelector('#aleNR').textContent = ales + 'x';
    }
    else{
        console.log('no more ale left :/');
    }
}

window.onload=function(){
    
    /*/
    document.querySelector('#jsuseItem').addEventListener('click', function () {
        console.log('use works (query selector)');
        
    });


    document.getElementById('js-useItem').addEventListener('click', function () {
        console.log('use works (get element dy id)');
        //alert('use works hurray');
    });
    /*/

} 