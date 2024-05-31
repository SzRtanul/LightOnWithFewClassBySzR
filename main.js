let button = []
document.addEventListener("load", init() );

function init(){
    gyokerpont();
}

function gyokerpont(){
    tomb = restart();
    document.getElementsByClassName("ujjatek")[0].addEventListener("click", function(){ restart() });
    megjelenit();
}







function megjelenit(){
    let s = "";
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            s+=`<button onclick="lep(${i},${j})" class="lampa ${!tomb[i][j] ? "zold" : "sarga"}"></button>`;
        }       
    }
    addInnerHTMLToAllClassName("jatekter", s);
    addInnerHTMLToAllClassName("zoldpont", mennyizold());
    updateZold();
}

function updateZold(){
    if(mennyisarga() == 0){
        nyert = true;
        addInnerHTMLToAllClassName("nyerte", "<h2>Nyert.</h2>")
    }
}


function restart(){
    addInnerHTMLToAllClassName("nyerte", "")
    
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