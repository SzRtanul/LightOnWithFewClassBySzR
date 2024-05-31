let tomb = kezdettomb();
let buttons = [];
let nyert = false;

gyokerpont();
function gyokerpont(){
    tomb = restart();
    document.getElementsByClassName("ujjatek")[0].addEventListener("click", function(){ restart() });
    megjelenit();
}

function kezdettomb(){
    let tomb = [];
    for(let i = 0; i < 6; i++){
        tomb.push([]);
        for(let j = 0; j < 6; j++){
            tomb[i].push(0);
        }
    }
    return tomb;
}

function lep(x, y){
   if(!nyert){
        tomb = valt(x, y)
        tomb = szomszedvalt(x, y);
        console.log("--------------------------------------------")
        megjelenit();
   }
}

function szomszedvalt(x, y){
    tomb = valt(x - 1, y)
    tomb = valt(x + 1, y)
    tomb = valt(x, y - 1)
    tomb = valt(x, y + 1)
    return tomb;
}

function valt(x, y){
    if(x >= 0 && y >= 0 && x < tomb.length && y < tomb[x].length) tomb[x][y] = tomb[x][y] == 0 ? 1 : 0;
    return tomb; 
}

function tombfeltolt(){
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            tomb[i][j] = 0;
        }
    }
    return tomb;
}
function randomlampa(){
    tomb[Math.floor(Math.random()*tomb.length)][Math.floor(Math.random()*tomb.length)] = 1;
    return tomb;
}

function megjelenit(){
    let s = "";
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            s+=`<button onclick="lep(${i},${j})" class="lampa ${!tomb[i][j] ? "zold" : "sarga"}"></button>`;
        }       
    }
    addInnerHTMLToAllClassName("jatekter", s);
    addInnerHTMLToAllClassName("zoldpont", mennyizold())
    if(mennyisarga() == 0){
        nyert = true;
        addInnerHTMLToAllClassName("nyerte", "<h2>Nyert.</h2>")
    }
}

function mennyizold(){
    let ossz = 0; 
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            ossz += !tomb[i][j] ? 1 : 0;
        }       
    }
    return ossz;
}
function mennyisarga(){
    let ossz = 0; 
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            ossz += tomb[i][j] ? 1 : 0;
        }       
    }
    return ossz;
}
function restart(){
    addInnerHTMLToAllClassName("nyerte", "")
    tomb = tombfeltolt();
    tomb = randomlampa()
    megjelenit();
    nyert = false;
    return tomb;
}

function addInnerHTMLToAllClassName(classname, htmlcode){
    let plcl = document.getElementsByClassName(classname);
    for(let i = 0; i < plcl.length; i++){
        plcl[i].innerHTML = htmlcode;
    }
}