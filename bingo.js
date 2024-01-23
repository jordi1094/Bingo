const prompt = require('prompt-sync')();


let counterLine = [0,0,0,0,0,0]
let linePlayer1 = []
let linePlayer2  = []
let linePlayer3 = []

let lineComputer1 = []
let lineComputer2  = []
let lineComputer3 = []
let line;

let numbersPlayed =[]

let cardC = {lineComputer1, lineComputer2, lineComputer3};
let cardP = {linePlayer1, linePlayer2, linePlayer3};

let randomNumber
let numbersRound

function NumberGenerator(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min) + min);
};
function GenerateCardComputer(){

    for (let i = 1, j = 21; i < 100 ; i += 20, j+= 20){
        NumberGenerator(i, j)
            lineComputer1.push(randomNumber) 
    };
    
    for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
        function lineCardComputer2(){
        NumberGenerator(i, j)
        if(lineComputer1.includes(randomNumber) === false && lineComputer2.includes(randomNumber)  === false){
            lineComputer2.push(randomNumber)
        }else{lineCardComputer2()}
        }
        lineCardComputer2()
    };
    
    
    for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
        function lineCardComputer3(){
        NumberGenerator(i, j)
        if(lineComputer1.includes(randomNumber) === false && lineComputer2.includes(randomNumber)  === false){
            lineComputer3.push(randomNumber)
        }else{lineCardComputer3()}
        }
        lineCardComputer3()
    };
};
function GenerateCardPlayer(){
    
    for (let i = 1, j = 21; i < 100 ; i += 20, j+= 20){
        NumberGenerator(i, j)
            linePlayer1.push(randomNumber) 
    };
    
    for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
        function lineCardPlayer2(){
        NumberGenerator(i, j)
        if(linePlayer1.includes(randomNumber) === false){
            linePlayer2.push(randomNumber)
        }else{lineCardPlayer2()}
        }
        lineCardPlayer2()
    };
    
    for (let i = 1, j = 21; i < 100 ; i += 20, j +=20){
        function lineCardPlayer3(){
        NumberGenerator(i, j)
        if(linePlayer1.includes(randomNumber) === false && linePlayer2.includes(randomNumber)  === false){
            linePlayer3.push(randomNumber)
        }else{lineCardPlayer3()}
        }
        lineCardPlayer3()
    };
};
function GenerarNumbersRound(){
    NumberGenerator(1, 100);
    if(numbersPlayed.includes(randomNumber) === true) {
        GenerarNumbersRound();
    }else{
        numbersPlayed.push(randomNumber)
        numbersPlayed.sort();
        numbersRound = randomNumber;
        
    }
};
function ronda(){
    GenerarNumbersRound()
    console.log('(=^･^=): ¡Ha salido el', numbersRound,'!')
    console.log('(=^･^=): Los numeron que ya han salido son: ', numbersPlayed)
    if(numbersPlayed.length === 100) {
        final1() 
    }else {
        checkCard(lineComputer1, numbersRound)
        checkCard(lineComputer2, numbersRound)
        checkCard(lineComputer3, numbersRound)
        checkCard(linePlayer1, numbersRound)
        checkCard(linePlayer2, numbersRound)
        checkCard(linePlayer3, numbersRound)
        


        CounterLine(lineComputer1, 0)
        CounterLine(lineComputer2, 1)
        CounterLine(lineComputer3, 2)
        CounterLine(linePlayer1, 3)
        CounterLine(linePlayer2, 4)
        CounterLine(linePlayer3, 5)
        
        if(counterLine[0] >= 5  && counterLine[1] >= 5 && counterLine[2] >= 5){
            console.log("(=^･^=) HA GANADO EL COMPUTER!!")
            console.table(cardC)
        }if(counterLine[3] >= 5  && counterLine[4] >= 5 && counterLine[5] >= 5){
            console.log("=^･^= HA GANADO EL PLAYER!!")
            console.table(cardP)
        }else{
            console.log('(=^･^=): los cardes estan asi:')
            console.log('card computer')
            console.table(cardC);
            console.log('card player')
            console.table(cardP)
            prompt('(=^･^=): Pulsa ENTER para el siguiente numero.')
            counterLine = [0,0,0,0,0,0]
            ronda()    
        }
    } 
};
function CounterLine(playerYLine, indiceLine){
    playerYLine.forEach((element) => {if(typeof(element) === "string"){
        counterLine[indiceLine]+= 1
        if(line === undefined && counterLine[indiceLine] === 5){line = 'se ha echo line'
        playerYLine.push('line')
        }
    }})
};
function checkCard (lineToCheck , numbersRound){

    if(lineToCheck.includes(numbersRound) === true){
        let indice = lineToCheck.indexOf(numbersRound);
        lineToCheck.splice(indice, 1, String(numbersRound))
    };
}
function final1() {
    console.log('YA HAN SALIDO TODOS LOS NUEMROS')
};

GenerateCardComputer();
GenerateCardPlayer();
console.log('(=^･^=): Hola, soy Miawcat, y te guiaré en este BINGO')
console.log('(=^･^=): BIENVENIDO AL BINGO');
console.log('(=^･^=): Estos son los cardes')
console.log('card computer')
console.table(cardC);
console.log('card player')
console.table(cardP)
prompt('(=^･^=): pulsa intro para empezar');
ronda()


