const blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')
const btnStart = document.getElementById('btnStart')

class Game{
    constructor(){
        this.init()
        this.generateSequence()
    }

    init(){
        btnStart.classList.add('hide')
    }

    generateSequence(){
        //the numer 10 in the array is going to represent the number of levels of the game
        this.sequence = new Array (10).fill(0).map(numRand => Math.floor(Math.random() * 4))
    }
}


function startGame(){
    window.game = new Game()
}