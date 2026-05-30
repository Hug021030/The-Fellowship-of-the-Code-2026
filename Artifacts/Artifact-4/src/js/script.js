
function useItem() {
  alert('Cant use this Item right now');
}

//health von member
let health = 70;

//Kann man die use Button Funktionen evtl gemeinsam generalisieren?
//item number list so wie sie am refresh drinn sind:
let itemsList =['4', '7', '26', '9', '420', '12', '5', '3', '2', '11', '1', '67', '5', '1', '29', '123'];
function useHealth(){
    //alle die die health vergrößern?
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

//window.onload=function(){
    
    /*/
    document.querySelector('#jsuseItem').addEventListener('click', function () {
        console.log('use works (query selector)');
        
    });


    document.getElementById('js-useItem').addEventListener('click', function () {
        console.log('use works (get element dy id)');
        //alert('use works hurray');
    });
    /*/

//} 