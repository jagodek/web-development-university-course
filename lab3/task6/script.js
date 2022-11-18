
function produceContact(name, number){
    let contact = document.createElement('div');
    contact.className = "contact";
    let infoDiv = document.createElement('div');

    contact.appendChild(infoDiv);
    let contactName = document.createElement('h4');
    contactName.innerHTML = name;
    let contactNumber = document.createElement('p');
    contactNumber.innerHTML = number;

    infoDiv.appendChild(contactName);
    infoDiv.appendChild(contactNumber)
    let buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = "<span class=\"material-icons\">delete</span>";

    buttonRemove.addEventListener('click',function () {contact.remove()})
    contact.appendChild(buttonRemove);

    return contact;
}

function addContact(){
    let name = inputName.value;
    let number = inputNumber.value;
    inputNumber.value = "";
    inputName.value = "";
    listContainer.append(produceContact(name,number));
    c1=false;
    c2=false;
    buttonAdd.disabled = true;
}

let listContainer  = document.getElementById('listContainer');

listContainer.appendChild(produceContact("Aa Bb","123 456 789"));

listContainer.appendChild(produceContact("Cc Dd","298 123 765"));



let buttonAdd = document.getElementById('buttonAdd');
let inputNumber = document.getElementById('number');
let inputName = document.getElementById('name');

// let form = document.forms.my;
// let inputNumber = form.elements
buttonAdd.disabled = true;

let c1 = false;
let c2 = false;

function activateButton(){
    if (c1 && c2){
        buttonAdd.disabled = false;
    }
    else{
        buttonAdd.disabled = true;
    }
}

inputName.addEventListener('input', function(){
    c1=false;
    let pattern = /^\p{Lu}{1}\p{Ll}+ \p{Lu}{1}\p{Ll}+([-]{1}\p{Lu}{1}\p{Ll}+)?$/u;
    let name = inputName.value;
    let msg = document.querySelector("#name ~ .error");
    if (name==null || name==""){  
        msg.innerHTML = "pole wymagane";
    }
    else if(!pattern.test(name)){
        msg.innerHTML = "niepoprawny format";
    }
    else{
        inputName.classList.remove('invalid');
        msg.innerHTML="";
        c1=true;
        activateButton();
    }

});

inputNumber.addEventListener('input', function(){
    c2=false;
    let pattern = /^([+]?([0-9]{1}[ ]?){3})?([0-9]{1}[\s-]*){9}$/;
    let number = inputNumber.value;
    let msg = document.querySelector("#number ~ .error");
    if (number==null || number==""){  
        msg.innerHTML = "pole wymagane";
    }
    else if(!pattern.test(number)){
        msg.innerHTML = "niepoprawny format";
    }
    else{
        msg.innerHTML="";
        c2=true;
        activateButton();
    }


});
inputName.addEventListener('input',activateButton);
inputNumber.addEventListener('input',activateButton);

buttonAdd.addEventListener('click',addContact);