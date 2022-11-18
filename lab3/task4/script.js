let b_inc = document.getElementById('inc');
let b_res = document.getElementById('res');
let ctr = document.getElementById('ctr');
let c= 0;
let flag = true;
ctr.innerText = c;
function clickInc(){

    c+=1;
    ctr.innerText = c;
}
function clickRes(){
    b_inc.removeEventListener('click',clickInc);
    c=0;
    ctr.innerText = c;
}
function clickResume(){
    b_inc.addEventListener('click',clickInc);
}



b_inc.addEventListener('click',clickInc);
b_res.addEventListener('toggle',clickRes);