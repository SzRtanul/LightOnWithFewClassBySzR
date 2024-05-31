class LightOn{
    constructor(){
        this.tomb = kezdettomb(3,3);
        this.tomb = tombfeltolt();
        this.tomb = randomlampa()
        this.nyert = false;
        const events =
        [ 
            new Event("adatvaltozas"),
            new Event("valakinyert")
        ];
    }

    kezdettomb(width, height){
        let tomb = [];
        for(let i = 0; i < width; i++){
            tomb.push([]);
            for(let j = 0; j < height; j++){
                tomb[i].push(0);
            }
        }
        return tomb;
    }

    lep(x, y){
        if(!nyert){
             tomb = valt(x, y)
             tomb = szomszedvalt(x, y);
             nyert = 
             document.dispatchEvent(events[0])
        }

     }

    szomszedvalt(x, y){
        tomb = valt(x - 1, y)
        tomb = valt(x + 1, y)
        tomb = valt(x, y - 1)
        tomb = valt(x, y + 1)
        return tomb;
    }
    
    valt(x, y){
        if(x >= 0 && y >= 0 && x < tomb.length && y < tomb[x].length) tomb[x][y] = tomb[x][y] == 0 ? 1 : 0;
        return tomb; 
    }
    
    tombfeltolt(){
        for(let i = 0; i < tomb.length; i++){
            for(let j = 0; j < tomb.length; j++){
                tomb[i][j] = 0;
            }
        }
        return tomb;
    }
    randomlampa(){
        tomb[Math.floor(Math.random()*tomb.length)][Math.floor(Math.random()*tomb.length)] = 1;
        return tomb;
    }

    mennyizold(){
        let ossz = 0; 
        for(let i = 0; i < tomb.length; i++){
            for(let j = 0; j < tomb.length; j++){
                ossz += !tomb[i][j] ? 1 : 0;
            }       
        }
        return ossz;
    }
    mennyisarga(){
        let ossz = 0; 
        for(let i = 0; i < tomb.length; i++){
            for(let j = 0; j < tomb.length; j++){
                ossz += tomb[i][j] ? 1 : 0;
            }       
        }
        return ossz;
    }

    restart(){
        addInnerHTMLToAllClassName("nyerte", "")
        
        megjelenit();
        nyert = false;
        return tomb;
    }
}