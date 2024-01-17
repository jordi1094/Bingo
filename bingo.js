const prompt = require('prompt-sync')();


let contadorLinea = [0,0,0,0,0,0]
let lineaPlayer1 = []
let lineaPlayer2  = []
let lineaPlayer3 = []

let lineaComputer1 = []
let lineaComputer2  = []
let lineaComputer3 = []
let linea;

let numerosJugados =[]

let cartonC = {lineaComputer1, lineaComputer2, lineaComputer3};
let cartonP = {lineaPlayer1, lineaPlayer2, lineaPlayer3};

let numeroAleatorio
let numeroRonda

function generarNumero(min, max) {
    return numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
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
    console.log('(=^･^=): ¡Ha salido el', numeroRonda,'!')
    console.log('(=^･^=): Los numeron que ya han salido son: ', numerosJugados)
    if(numerosJugados.length === 100) {
        final1() 
    }else {
        checkCarton(lineaComputer1, numeroRonda)
        checkCarton(lineaComputer2, numeroRonda)
        checkCarton(lineaComputer3, numeroRonda)
        checkCarton(lineaPlayer1, numeroRonda)
        checkCarton(lineaPlayer2, numeroRonda)
        checkCarton(lineaPlayer3, numeroRonda)
        


        ContadorLinea(lineaComputer1, 0)
        ContadorLinea(lineaComputer2, 1)
        ContadorLinea(lineaComputer3, 2)
        ContadorLinea(lineaPlayer1, 3)
        ContadorLinea(lineaPlayer2, 4)
        ContadorLinea(lineaPlayer3, 5)
        
        if(contadorLinea[0] >= 5  && contadorLinea[1] >= 5 && contadorLinea[2] >= 5){
            console.log("(=^･^=) HA GANADO EL COMPUTER!!")
            console.table(cartonC)
        }if(contadorLinea[3] >= 5  && contadorLinea[4] >= 5 && contadorLinea[5] >= 5){
            console.log("=^･^= HA GANADO EL JUGADOR!!")
            console.table(cartonP)
        }else{
            console.log('(=^･^=): los cartones estan asi:')
            console.log('carton computer')
            console.table(cartonC);
            console.log('carton jugador')
            console.table(cartonP)
            prompt('(=^･^=): Pulsa ENTER para el siguiente numero.')
            contadorLinea = [0,0,0,0,0,0]
            ronda()    
        }
    } 
};
function ContadorLinea(jugadorYLinea, indiceLinea){
    jugadorYLinea.forEach((element) => {if(typeof(element) === "string"){
        contadorLinea[indiceLinea]+= 1
        if(linea === undefined && contadorLinea[indiceLinea] === 5){linea = 'se ha echo linea'
        jugadorYLinea.push('linea')
        }
    }})
};
function checkCarton (lineaToCheck , numeroRonda){

    if(lineaToCheck.includes(numeroRonda) === true){
        let indice = lineaToCheck.indexOf(numeroRonda);
        lineaToCheck.splice(indice, 1, String(numeroRonda))
    };
}
function final1() {
    console.log('YA HAN SALIDO TODOS LOS NUEMROS')
};

generarCartonComputer();
generarCartonPlayer();
console.log('(=^･^=): Hola, soy Miawcat, y te guiaré en este BINGO')
console.log('(=^･^=): BIENVENIDO AL BINGO');
console.log('(=^･^=): Estos son los cartones')
console.log('carton computer')
console.table(cartonC);
console.log('carton jugador')
console.table(cartonP)
prompt('(=^･^=): pulsa intro para empezar');
ronda()


