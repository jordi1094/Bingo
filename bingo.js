const prompt = require('prompt-sync')();

let lineaPlayer1 = []
let lineaPlayer2  = []
let lineaPlayer3 = []

let lineaComputer1 = []
let lineaComputer2  = []
let lineaComputer3 = []

let cartonC = {lineaComputer1, lineaComputer2, lineaComputer3};
let cartonP = {lineaPlayer1, lineaPlayer2, lineaPlayer3};

let numeroAleatorio
let numeroRonda
function generarNumero(min, max) {
    return numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
};
const numerosJugados =[]
function final() {
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
    console.log('¡Ha salido el', numeroRonda,'!')
    console.log('los numeron que ya han salido son: ', numerosJugados)
    if(numerosJugados.length === 100) {
        final() 
    }else {
        let next = prompt('pulsa ENTER para el siguiente numero.')
        ronda()}
    
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


// visualizacion cartones

generarCartonComputer();
generarCartonPlayer();
console.log('carton computer')
console.table(cartonC);
console.log('carton jugador')
console.table(cartonP)
console.log('BIENVENIDO AL BINGO');
let intro = prompt('pulsa intro para empezar');
ronda()
