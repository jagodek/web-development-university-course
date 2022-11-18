let inputNew = document.getElementById('new');
let inputRep = document.getElementById('repeat');
inputNew.type = "password";
inputRep.type = "password";

let newVis = document.querySelector("#newContainer span");
let repVis = document.querySelector("#repeatContainer span");

let nv = false;
let rv = false;

function toggleNew() {
    if (nv == false) {
        nv = true;
        newVis.innerHTML = "visibility_off";
        inputNew.type = "text";
    }
    else {
        nv = false;
        newVis.innerHTML = "visibility";
        inputNew.type = "password";
    }
}

function toggleRep() {
    if (rv == false) {
        rv = true;
        repVis.innerHTML = "visibility_off";
        inputRep.type = "text";
    }
    else {
        rv = false;
        repVis.innerHTML = "visibility";
        inputRep.type = "password";
    }
}

function validate() {
    let pass = inputNew.value;
    if (pass.length < 8) {
        document.querySelector("#char span").innerHTML = "cancel";
        document.querySelector("#char span").style.color = "#f00";
    }
    else {
        document.querySelector("#char span").innerHTML = "check_circle";
        document.querySelector("#char span").style.color = "#1f3";
    }
    if (/^.*\p{Lu}+.*$/u.test(pass)) {
        document.querySelector("#cap span").innerHTML = "check_circle";
        document.querySelector("#cap span").style.color = "#1f3";

    }
    else {
        document.querySelector("#cap span").innerHTML = "cancel";
        document.querySelector("#cap span").style.color = "#f00";

    }
    if (/^.*[*.!@#$%\^&(){}[\]:;<>,.?\/~_+\-=|\\]+.*$/u.test(pass)) {
        document.querySelector("#spec span").innerHTML = "check_circle";
        document.querySelector("#spec span").style.color = "#1f3";

    }
    else {
        document.querySelector("#spec span").innerHTML = "cancel";
        document.querySelector("#spec span").style.color = "#f00";

    }
    if (/^.*[0-9]+.*$/u.test(pass)) {
        document.querySelector("#dig span").innerHTML = "check_circle";
        document.querySelector("#dig span").style.color = "#1f3";

    }
    else {
        document.querySelector("#dig span").innerHTML = "cancel";
        document.querySelector("#dig span").style.color = "#f00";

    }

}
function validateRep() {
    let pass = inputRep.value;
    if ((pass.length > 0) && (pass == inputNew.value)) {
        document.querySelector("#rep span").innerHTML = "check_circle";
        document.querySelector("#char span").style.color = "#1f3";

    }
    else {
        document.querySelector("#rep span").innerHTML = "cancel";
        document.querySelector("#rep span").style.color = "#f00";

    }
}

validate();
validateRep();

newVis.addEventListener('click', toggleNew);
repVis.addEventListener('click', toggleRep);

inputNew.addEventListener('input', validate);
inputRep.addEventListener('input', validateRep);
