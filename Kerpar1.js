var LivingCreature = require("./LivingCreature.js")
module.exports =  class Kerpar1 extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 4;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);


    }

    mult() {
       // var empty = random(this.chooseCell(0))
       var arr=this.chooseCell(0);
       var empty = arr[Math.floor(Math.random()*arr.length)];

        if (empty && this.energy > 30) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var kp1 = new Kerpar1(newX, newY)
            kerpar1Arr.push(kp1)
        }
    }

    move() {
     //   var empty = random(this.chooseCell(0))
     var arr=this.chooseCell(0);
     var empty = arr[Math.floor(Math.random()*arr.length)];

        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
       // var food = random(this.chooseCell(1))
       // var food1 = random(this.chooseCell(2))
       // var food2 = random(this.chooseCell(3))
       var arr=this.chooseCell(1);
       var food = arr[Math.floor(Math.random()*arr.length)];

       var arr=this.chooseCell(2);
       var food1 = arr[Math.floor(Math.random()*arr.length)];
       
       var arr=this.chooseCell(3);
       var food2 = arr[Math.floor(Math.random()*arr.length)];



        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }

        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy++
        }
        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in kerparArr) {
                if (kerparArr[i].x == newX && kerparArr[i].y == newY) {
                    kerparArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }



    die() {
        if (this.energy <= 1) {
            matrix[this.y][this.x] = 0
            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == this.x && kerpar1Arr[i].y == this.y) {
                    kerpar1Arr.splice(i, 1)
                }
            }
        }
    }

}