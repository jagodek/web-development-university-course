
const slideArea =document.getElementById("slideArea");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const random = document.getElementById("random");
let curr = 0;


let personA = {
    name:"Anna B.",
    image:"https://picsum.photos/id/64/150/150",
    position:"Project manger",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dicta sequi, aut maxime enim sint in, earum porro saepe fugiat laudantium suscipit voluptatibus fuga iusto quos itaque dolore? Quia, minima!"
};
let personB = {
    name:"Zdalny pracownik",
    image:"https://picsum.photos/id/180/150/150",
    position:"Senior ",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dicta sequi, aut maxime enim sint in, earum porro saepe fugiat laudantium suscipit voluptatibus fuga iusto quos itaque dolore? Quia, minima!"
};

let personC = {
    name:"Emil F.",
    image:"https://picsum.photos/id/6/150/150",
    position:"Project manger",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dicta sequi, aut maxime enim sint in, earum porro saepe fugiat laudantium suscipit voluptatibus fuga iusto quos itaque dolore? Quia, minima!"
}

people = [personA,personB,personC];

function produceEement(person){
    let slideContainer = document.createElement('div');
    slideContainer.className = "slideContainer";
    slideContainer.innerHTML = "<div class=\"slide\"><img src=\""+person.image+"\" alt=\"\"><h4>"+person.name+"</h4><h3>"+person.position+"</h3><p>"+person.description+"</p></div>";
    return slideContainer;
}

peopleElems = people.map(a => {return produceEement(a)});
let n = peopleElems.length;

console.log(peopleElems);
peopleElems[curr].classList.add("center");
slideArea.appendChild(peopleElems[curr]);

let prev = curr-1;
prev= ((prev % n) + n) % n;
console.log(prev);
peopleElems[prev].classList.add("left");
slideArea.appendChild(peopleElems[prev]);


let nxt = curr+1;
nxt%=n;
peopleElems[nxt].classList.add("right");
slideArea.appendChild(peopleElems[nxt]);







function moveLeft(){

    let prev = curr-1;
    prev=((prev % n) + n) % n;
    peopleElems[prev].classList.remove("left");
    slideArea.removeChild(peopleElems[prev]);

    peopleElems[curr].classList.remove("center");
    peopleElems[curr].classList.add("left");
    
    curr+=1;
    curr%=n;

    peopleElems[curr].classList.remove("right");
    peopleElems[curr].classList.add("center");

    nxt = curr + 1;
    nxt%=n;

    peopleElems[nxt].classList.add("right");
    slideArea.appendChild(peopleElems[nxt]);
}

function moveRight(){
    let prev = curr+1;
    prev=((prev % n) + n) % n;
    peopleElems[prev].classList.remove("right");
    slideArea.removeChild(peopleElems[prev]);

    peopleElems[curr].classList.remove("center");
    peopleElems[curr].classList.add("right");
    
    curr-=1;
    curr=((curr % n) + n) % n;

    peopleElems[curr].classList.remove("left");
    peopleElems[curr].classList.add("center");

    nxt = curr - 1;
    nxt=((nxt % n) + n) % n;

    peopleElems[nxt].classList.add("left");
    slideArea.appendChild(peopleElems[nxt]);
}
function moveRandom(){

    curr = Math.round(Math.random()*(n-1));
    for(let i=0;i<curr;i++){
        moveRight();
        
    }

}




buttonLeft.addEventListener('click',moveLeft);
buttonRight.addEventListener('click',moveRight);
random.addEventListener('click',moveRandom)