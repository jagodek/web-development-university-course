


let button = document.getElementById('nextbutton');
// button.ATTRIBUTE_NODE;
let urls = ["https://picsum.photos/id/1/200/300","https://picsum.photos/id/2/200/300","https://picsum.photos/id/3/200/300",];
let colors = ['red','blue','green']
let c = 0;
let n = urls.length;
let im = document.getElementById('image');
im.setAttribute('src',urls[c]);
im.setAttribute('class',colors[c])
function clickme(){

    c+=1;
    c%=n;
    im.setAttribute('src',urls[c]);
    im.setAttribute('class',colors[c])
}

button.addEventListener('click',clickme,false);

// setattribute
// setclass
// createelemnt
// textcontent

// "te zadania to max 1 dzień pracy"
// "no..."
// "dla mniej kumatych niech to będą 2 dni"