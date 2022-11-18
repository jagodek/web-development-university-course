let b_add = document.getElementById('add');
let b_remove = document.getElementById('remove');
let counter = 0;
let list = document.getElementById('list');

function clickAdd(){
    counter+=1;
    let num = document.createElement('li');
    num.innerHTML = counter;
    list.appendChild(num);
    document.getElementById("ctr").innerHTML=counter;
}
function clickRemove(){
    
    if(counter>0){
        counter-=1;
        console.log('foo');
        list.removeChild(list.firstElementChild);
    }
    document.getElementById("ctr").innerHTML=counter;

}


b_add.addEventListener('click',clickAdd,false);
b_remove.addEventListener('click',clickRemove, false);

