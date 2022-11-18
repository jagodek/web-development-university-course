function clickme(){
    let name = prompt('what\'s your name');
    if(name.charAt(name.length-1) == 'a'){
        name = 'mrs '+ name;
    }
    else{
        name = 'mr '+ name;
    }
    document.getElementById('welcome').insertAdjacentText('afterend',name);

}

let element = document.getElementById('button');
element.addEventListener('click',clickme,false);
// alert("hello world");
// element.removeEventListener('click',clickme,false);
// nie używać od razu po bo się wyłąćza klikanie od razu