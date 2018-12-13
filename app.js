const blue = document.getElementById('blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')
const LAST_LEVEL = 10


class Game{
    constructor(){
        this.init = this.init.bind(this)
        this.init()
        this.generateSequence()
        setTimeout(this.nextLevel, 500)
    }

    init(){
        this.chooseColor = this.chooseColor.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
        this.togglebtnStart()
        this.level = 1
        this.colors = {
            blue,
            violet,
            orange,
            green
        }
    }

    togglebtnStart(){
        if(btnStart.classList.contains('hide')){
            btnStart.classList.remove('hide')
        }
        else{
            btnStart.classList.add('hide')
        }
    }

    generateSequence(){
        //the numer 10 in the array is going to represent the number of levels of the game
        this.sequence = new Array (LAST_LEVEL).fill(0).map(numRand => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.sublevel = 0
        this.iluminateSequence()
        this.eventClick()        
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

    transColortoNum(color){
        switch (color){
            case 'blue':
                return 0
            case 'violet': 
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
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

    eventClick(){
        this.colors.blue.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
    }

    deleteEventClick(){
        this.colors.blue.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
    }

    chooseColor(ev){
        const colorName = ev.target.dataset.color
        const colorNumber = this.transColortoNum(colorName)
        this.iluminateColor(colorName)
        if(colorNumber === this.sequence[this.sublevel]){
            this.sublevel++
            if(this.sublevel === this.level){
                this.level++
                console.log(this.level)
                this.deleteEventClick()
                if(this.level === (LAST_LEVEL + 1)){
                    // You win!
                    this.gameWin()
                }
                else{
                    setTimeout(this.nextLevel, 1500)
                }
            }
        }
        else{
            //Game over
            this.gameOver()
        }
    }

    gameWin(){
        swal ( "Simons" ,  "Dude, you win!" ,  "success" )
        .then(this.init)
    }

    gameOver(){
        swal ( "Simons" ,  "Dude, sorry Game over :c" ,  "error" )
        .then(() => {
            this.deleteEventClick()
            this.init()
        })
    }
}


function startGame(){
    window.game = new Game()
}