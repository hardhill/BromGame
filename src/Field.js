'use strict'
import { randomInteger, Cliff, ChangeDirect, RandomRGBA } from './Util'
export class Field {

    constructor(ctx) {
        this.ctx = ctx
        this.layers = []
        this.ctx.fillStyle = 'rgb(200, 255, 200)';
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.strokeStyle = 'rgb(0, 255, 0)';
        this.ctx.strokeRect(0, 0, 800, 600);
        this.player = new Player();
        setInterval(() => {
            this.Update()
        }, 16)
    }
    Clear() {
        this.ctx.fillStyle = 'rgb(210, 255, 200)';
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.strokeStyle = 'rgb(0, 255, 0)';
        this.ctx.strokeRect(0, 0, 800, 600);
        this.layers = []
    }

    DrawPlayer() {
        var width = this.player.Fat * 4
        var height = this.player.Fat * 4
        var x = this.player.Position.x - width / 2
        var y = this.player.Position.y - height / 2

        
        this.ctx.fillStyle = this.player.Color
        this.ctx.fillRect(x, y, width, height)
    }

    Update() {
        //this.Clear()
        this.DrawPlayer()
    }
}

export class Player {

    constructor() {
        this.position = {
            x: 400,
            y: 300
        }
        this.Rast = 0
        this.color = 'rgb(215,99,50)'
        this.health = 100
        this.direction = 0
        this.speed = 2
        this.born = new Date()
        this.fat = 1
        setInterval(() => {
            this.Life()
        }, 16)
    }

    set Color(color) {
        this.color = color
    }

    get Color() {
        return this.color
    }

    get Position() {
        return this.position
    }
    get Fat() {
        return this.fat
    }

    Life() {
        // set speed
        this.speed = randomInteger(this.speed - 1, this.speed + 1)
        this.speed = Cliff(this.speed,1,16)
        var U = this.speed * 0.016
        this.Rast += U
        //направления
        if (this.Rast >= 1) {
            //
            
            switch(this.direction){
                case 0:
                    this.position.y--
                    
                    break
                case 2:
                    this.position.x++
                    break
                case 4:
                    this.position.y++
                    break
                case 6:
                    this.position.x--
                    break
                default:
            }
        }
        this.position.y = Cliff(this.position.y,20,600)
        this.position.x = Cliff(this.position.x,1,800)
        var m = this.direction
        this.Direction()
        if(m!=this.direction)
            this.color = RandomRGBA()
        
    }

    Direction(){
        var i = randomInteger(1, 100)
        if (i > 95) {
            switch (this.direction) {
                case 0:
                case 4:
                    if (randomInteger(1, 10) > 5) { this.direction = 6 } else { this.direction = 2 }
                    break
                case 2:
                case 6:
                    if (randomInteger(1, 10) > 5) { this.direction = 0 } else { this.direction = 4 }
                    break
            }
        }
    }
}
