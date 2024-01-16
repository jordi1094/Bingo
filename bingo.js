const prompt = require('prompt-sync')();

let ContadorLinea = [0,0,0,0,0,0]
let lineaPlayer1 = []
let lineaPlayer2  = []
let lineaPlayer3 = []

let lineaComputer1 = []
let lineaComputer2  = []
let lineaComputer3 = []
let linea;

let cartonC = {lineaComputer1, lineaComputer2, lineaComputer3};
let cartonP = {lineaPlayer1, lineaPlayer2, lineaPlayer3};

let numeroAleatorio
let numeroRonda

function generarNumero(min, max) {
    return numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
};
const numerosJugados =[]
function final1() {
    console.log('YA HAN SALIDO TODOS LOS NUEMROS')
};


function GenerarNumeroRonda(){
    generarNumero(1, 100);
    if(numerosJugados.includes(numeroAleatorio) === true) {
        GenerarNumeroRonda();
    }else{
        numerosJugados.push(numeroAleatorio)
        numerosJugados.sort();
        numeroRonda = numeroAleatorio;
       
    }
};
function ronda(){
    GenerarNumeroRonda()
    console.log('(=^･^=) ¡Ha salido el', numeroRonda,'!')
    console.log('los numeron que ya han salido son: ', numerosJugados)
    if(numerosJugados.length === 100) {
        final1() 
    }else {
        checkCartones()

        lineaComputer1.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[0]+= 1
            if(linea === undefined && ContadorLinea[0] === 5){linea = "linea computer 1"
            lineaComputer1.push("linea")
        }
            
        }});
        lineaComputer2.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[1]+= 1
            if(linea === undefined && ContadorLinea[1] === 5){linea = "linea computer 2"
            lineaComputer2.push("linea")
        }
        }});
        lineaComputer3.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[2]+= 1
            if(linea === undefined && ContadorLinea[2] === 5){linea = "linea computer 3"
            lineaComputer3.push("linea")
        }
        }});
        lineaPlayer1.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[3]+= 1
            if(linea === undefined && ContadorLinea[3] === 5){linea = "linea jugador 1"
            lineaPlayer1.push("linea")
        }   
        }});
        lineaPlayer2.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[4]+= 1
            if(linea === undefined && ContadorLinea[4] === 5){linea = "linea jugador 2"
            lineaPlayer2.push("linea")
        }
        }});
        lineaPlayer3.forEach((element) => {if(typeof(element) === "string"){
            ContadorLinea[5]+= 1
            if(linea === undefined && ContadorLinea[5] === 5){linea = "linea Jugador 3"
            lineaPlayer3.push("linea")
        }  
        }})
      
        if(ContadorLinea[0] >= 5  && ContadorLinea[1] >= 5 && ContadorLinea[2] >= 5){
            console.log("(=^･^=) HA GANADO EL COMPUTER!!")
            console.table(cartonC)
        }if(ContadorLinea[3] >= 5  && ContadorLinea[4] >= 5 && ContadorLinea[5] >= 5){
            console.log(("=^･^= HA GANADO EL JUGADOR!!"))
            console.table(cartonP)
        }else{
            console.log('los cartones estan asi:')
            console.log('carton computer')
            console.table(cartonC);
            console.log('carton jugador')
            console.table(cartonP)
            prompt('(=^･^=) pulsa ENTER para el siguiente numero.')
            ContadorLinea = [0,0,0,0,0,0]
            ronda()    
        }
    } 
};

function generarCartonComputer(){

for (let i = 1, j = 21; i < 100 ; i += 20, j+= 20){
    generarNumero(i, j)
        lineaComputer1.push(numeroAleatorio) 
};

for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
    function lineaCartonComputer2(){
    generarNumero(i, j)
    if(lineaComputer1.includes(numeroAleatorio) === false && lineaComputer2.includes(numeroAleatorio)  === false){
        lineaComputer2.push(numeroAleatorio)
    }else{lineaCartonComputer2()}
    }
    lineaCartonComputer2()
};


for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
    function lineaCartonComputer3(){
    generarNumero(i, j)
    if(lineaComputer1.includes(numeroAleatorio) === false && lineaComputer2.includes(numeroAleatorio)  === false){
        lineaComputer3.push(numeroAleatorio)
    }else{lineaCartonComputer3()}
    }
    lineaCartonComputer3()
};
};
function generarCartonPlayer(){

for (let i = 1, j = 21; i < 100 ; i += 20, j+= 20){
    generarNumero(i, j)
        lineaPlayer1.push(numeroAleatorio) 
};

for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
    function lineaCartonPlayer2(){
    generarNumero(i, j)
    if(lineaPlayer1.includes(numeroAleatorio) === false){
        lineaPlayer2.push(numeroAleatorio)
    }else{lineaCartonPlayer2()}
    }
    lineaCartonPlayer2()
};

for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
    function lineaCartonPlayer3(){
    generarNumero(i, j)
    if(lineaPlayer1.includes(numeroAleatorio) === false && lineaPlayer2.includes(numeroAleatorio)  === false){
        lineaPlayer3.push(numeroAleatorio)
    }else{lineaCartonPlayer3()}
    }
    lineaCartonPlayer3()
};
};
function checkCartones (){

    if(lineaComputer1.includes(numeroRonda) === true){
        let indice = lineaComputer1.indexOf(numeroRonda);
        lineaComputer1.splice(indice, 1, String(numeroRonda))
    };
    if(lineaComputer2.includes(numeroRonda) === true){
        let indice = lineaComputer2.indexOf(numeroRonda);
        lineaComputer2.splice(indice, 1, String(numeroRonda))
    };
    
    if(lineaComputer3.includes(numeroRonda) === true){
        let indice = lineaComputer3.indexOf(numeroRonda);
        lineaComputer3.splice(indice, 1, String(numeroRonda))
    };
    
    if(lineaPlayer1.includes(numeroRonda) === true){
        let indice = lineaPlayer1.indexOf(numeroRonda);
        lineaPlayer1.splice(indice, 1, String(numeroRonda))
    };
    
    if(lineaPlayer2.includes(numeroRonda) === true){
        let indice = lineaPlayer2.indexOf(numeroRonda);
        lineaPlayer2.splice(indice, 1, String(numeroRonda))
    };
    
    if(lineaPlayer3.includes(numeroRonda) === true){
        let indice = lineaPlayer3.indexOf(numeroRonda);
        lineaPlayer3.splice(indice, 1, String(numeroRonda))
    };
    };




generarCartonComputer();
generarCartonPlayer();
console.log('(=^･^=): Hola, soy Miawcat, y te guiaré en este juego')
console.log('BIENVENIDO AL BINGO');
console.log('carton computer')
console.table(cartonC);
console.log('carton jugador')
console.table(cartonP)
prompt('(=^･^=): pulsa intro para empezar');
ronda()


