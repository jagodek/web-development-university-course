let pa = document.getElementById('pa');
let pb = document.getElementById('pb');
let pc = document.getElementById('pc');
let pd = document.getElementById('pd');
let pe = document.getElementById('pe');
let pf = document.getElementById('pf');
let pg = document.getElementById('pg');

fetch('http://localhost:3000/cities').then((response) => response.json())
.then((data) => {
    let objects = data.filter(a => a.province === 'małopolskie');
    let names = "";
    for (let elem of objects){
        names = names + elem['name'] + "\n";
    }
    pa.innerText = names;


    let reg = /.*[Aa]{1}.*[aA]{1}.*/;
    objects = data.filter(a => reg.test(a.name))
    names = "";
    for (let elem of objects){
        names = names + elem['name'] + "\n";
    }
    pb.innerText = names;

    objects = data.sort((a,b) => {ag = a.people/a.area;
    bg = b.people/b.area;
    if(ag>bg){
        return -1;
    }
    return 1;
    })
    names = objects[4].name;
    pc.innerText = names;

    data.map(a => {if(a.people >100000){a.name += " city"} return a;});
    names = "";
    for (let elem of data){
        names = names + elem['name'] + "\n";
    }
    pd.innerText = names;

    let more = data.filter(a =>  a.people > 80000).length;
    let less = data.filter(a =>  a.people <= 80000).length;
    pe.innerText = (more>less)?more+" powyżej 80000":less+" poniżej 80000";

    objects = data.filter(a => /^P.*/.test(a.township)).map(a => {return a.area});
    pf.innerText = Math.round(objects.reduce((a,b) => a + b , 0) / objects.length*100)/100;

    objects = data.filter(a => a.people > 5000 && a.province ==='pomorskie').length;
    let total = data.filter(a => a.province === "pomorskie").length;
    pg.innerText = objects + "/" + total; 
});


