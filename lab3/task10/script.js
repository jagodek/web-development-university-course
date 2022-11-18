const box = document.getElementById("box");
let ballCord = box.getBoundingClientRect();

let ball = document.getElementById("ball");
var r = document.querySelector(':root');
function stopBubble(e) {
    if (!e){
        let e = window.event;
    }
        e.cancelBubble = true;
    if (e.stopPropagation){
        e.stopPropagation();
    }
}



let x;
let y ;
function follow(e){const animated = document.querySelector('.animate');
    stopBubble(e);
    x = e.pageX;
    y = e.pageY;
    // ball.style.backgroundColor = "red";
    // ball.style.transform = "translateX("+x+")";
    // ball.style.transform = "translateY("+y+")";
    xPix = (x-50)+"px";
    yPix= (y-50)+"px";
    // ball.style.left = (x-50)+"px";
    // ball.style.top = (y-50)+"px";
    
    let ballCord = box.getBoundingClientRect();

    ball.classList.add("animate")
    
    r.style.setProperty('--x2', xPix);
    r.style.setProperty('--y2', yPix);


}


box.addEventListener('click',follow);
ball.addEventListener('animationend',() => {

    r.style.setProperty('--x1', xPix);
    r.style.setProperty('--y1', yPix);
    ball.classList.remove("animate")

})

const outside = document.body;
outside.addEventListener('click',() =>{

document.querySelector("p").innerText = "ale nie tu";
window.setTimeout(() => {document.querySelector("p").innerText = "naciśnij gdziekolwiek";}, 2000 )
})