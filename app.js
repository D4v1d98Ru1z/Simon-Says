const blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')
const btnStart = document.getElementById('btnStart')

class Game{
    constructor(){
        this.init()
    }

    init(){
        btnStart.classList.add('hide')
    }
}


function startGame(){
    let game = new Game()
}