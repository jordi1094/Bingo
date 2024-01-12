const prompt = require('prompt-sync')();
console.log('BIENVENIDO AL BINGO');
let intro = prompt('pulsa intro para empezar')
let numeroAleatorio
function generarNumero() {
    return numeroAleatorio = Math.floor(Math.random() * max);
    if(numerosJugados.length === 101){
        final()
    }else{ronda()}
};
const numerosJugados =[]
function final() {
    console.log('YA HAN SALIDO TODOS LOS NUEMROS')
}

let numeroRonda
function GenerarNumeroRonda(){
    generarNumero(100);
    if(numerosJugados.includes(numeroAleatorio) === true) {
        GenerarNumeroRonda();
    }else{
        numerosJugados.push(numeroAleatorio)
        numerosJugados.sort();
        numeroRonda = numeroAleatorio;
       
    }
}



let lineaC1 = [ 2, 23,45,76,90]
let lineaC2  = [ 5,25,57,89,100]
let lineaC3 = [10,55,67,87,'95']

let lineaP1 = [ 3, 33,45,86,99]
let lineaP2  = [ 4,24,56,88,98]
let lineaP3 = [11,56,68,86,'97']



// visualizacion resultado 
let cartonC = {lineaC1, lineaC2, lineaC3}
let cartonP = {lineaP1, lineaP2, lineaP3}

/*console.log('carton computer')
console.table(cartonC);
console.log('carton jugador')
console.table(cartonP)*/
function ronda(){
    GenerarNumeroRonda()
    console.log('¡Ha salido el', numeroRonda,'!')
    console.log('los numeron que ya han salido son: ', numerosJugados)
    console.log(numerosJugados.length)
    
}
ronda()
