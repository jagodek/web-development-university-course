let blue = document.getElementById('blue');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let info = document.getElementById('info');
let ctr = document.getElementById('ctr');
let buttonProp = document.getElementById('prop');
let buttonReset = document.getElementById('reset');
let buttonDir = document.getElementById('direction');


let c = 0;
ctr.innerText = c;
let prop = false;
let dir = false;



function stopBubble(e) {
    if (!e){
        let e = window.event;
    }
        e.cancelBubble = true;
    if (e.stopPropagation){
        e.stopPropagation();
    }
}
    



function blueClick(e){
    c+=1;
    console.log("blue");
    ctr.innerText = c;

}
function redClick(e){
    c+=2;
    if(c>=30){
        red.removeEventListener('click',redText,{capture:true});
        red.removeEventListener('click',redClick);

    }
    ctr.innerText = c;


}
function yellowClick(e){

    c+=3;
    if(c>=50){
        yellow.removeEventListener('click',yellowText,{capture:true});
        yellow.removeEventListener('click',yellowClick);
    }
    ctr.innerText = c;
}

function blueText(){
    info.innerText = "kliknięty niebieski o wartości 1";

}

function redText(){
    info.innerText = "kliknięty czerwony o wartości 2";

}
function yellowText(){
    info.innerText = "kliknięty żóty o wartości 3";

}


function propClick(e){
    if(prop==false){
        console.log('on');
        prop = true;
        e.stopPropagation;

        red.addEventListener('click',stopBubble);
        yellow.addEventListener('click',stopBubble);
        buttonProp.innerHTML = "stratPropagation";
    }
    else{
        console.log('off');
        red.removeEventListener('click',stopBubble);
        yellow.removeEventListener('click',stopBubble);
        prop = false;
        buttonProp.innerHTML = "stopPropagation";

    }    
}

function resetClick(){
    c = 0;
    ctr.innerText = c;
    info.innerText = "";
}

function dirClick(){
    if(dir==fale){
        dir = true;
        blue.removeEventListener('click',blueClick);
        red.removeEventListener('click',redClick);
        yellow.removeEventListener('click',yellowClick);

        blue.addEventListener('click',blueClick,{capture:true});
        red.addEventListener('click',redClick,{capture:true});
        yellow.addEventListener('click',yellowClick,{capture:true});

        blue.removeEventListener('click',blueText,{capture:true});
        red.removeEventListener('click',redText,{capture:true});
        yellow.removeEventListener('click',yellowText,{capture:true});

        blue.addEventListener('click',blueText);
        red.addEventListener('click',redText);
        yellow.addEventListener('click',yellowText);


    }
    else{
        dir = false;
        blue.addEventListener('click',blueClick);
        red.addEventListener('click',redClick);
        yellow.addEventListener('click',yellowClick);

        blue.removeEventListener('click',blueClick,{capture:true});
        red.removeEventListener('click',redClick,{capture:true});
        yellow.removeEventListener('click',yellowClick,{capture:true});

        blue.removeEventListener('click',blueText);
        red.removeEventListener('click',redText);
        yellow.removeEventListener('click',yellowText);


        blue.addEventListener('click',blueText,{capture:true});
        red.addEventListener('click',redText,{capture:true});
        yellow.addEventListener('click',yellowText,{capture:true});

    }
}


blue.addEventListener('click',blueClick);
red.addEventListener('click',redClick);
yellow.addEventListener('click',yellowClick);
blue.addEventListener('click',blueText,{capture:true});
red.addEventListener('click',redText,{capture:true});
yellow.addEventListener('click',yellowText,{capture:true});
buttonProp.addEventListener('click',propClick);
buttonReset.addEventListener('click',resetClick);
buttonDir.addEventListener('click',dirClick);