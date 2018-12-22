var LivingCreature = require("./LivingCreature.js");
module.exports = class Grass  extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1], 
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],

            [this.x - 3, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y - 2],
            [this.x + 2, this.y - 3],
            [this.x - 2, this.y - 3]

        ]
    }

    chooseCell(character) {
        return super.chooseCell(character);


    }

    mult() {
       // var empty = random(this.chooseCell(0))
        this.multiply++

        var arr=this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];

        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
            grassyTaracvec ++;
        }
    }
}