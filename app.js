const blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')
const btnStart = document.getElementById('btnStart')

class Game{
    constructor(){
        this.init()
        this.generateSequence()
        this.nextLevel()
    }

    init(){
        btnStart.classList.add('hide')
        this.level = 1
        this.colors = {
            blue,
            violet,
            orange,
            green
        }
    }

    generateSequence(){
        //the numer 10 in the array is going to represent the number of levels of the game
        this.sequence = new Array (10).fill(0).map(numRand => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.iluminateSequence()
    }

    transNumtoColor(number){
        switch (number){
            case 0:
                return 'blue'
            case 1: 
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    iluminateSequence(){
        for(let counter = 0; counter < this.level; counter++){
            const color = this.transNumtoColor(this.sequence[counter])
            setTimeout(() => this.iluminateColor(color), 1000 * counter)
        }
    }

    iluminateColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.shutdownColor(color), 350)
    }

    shutdownColor(color){
        this.colors[color].classList.remove('light')
    }
}


function startGame(){
    window.game = new Game()
}