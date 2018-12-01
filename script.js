
var side = 35
var matrix = [];
matrix = fillMatrix(30, 30)
console.log(matrix)
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([])
        for (var j = 0; j < m; j++) {

            matrix[i].push(0)
        }
    }
    return matrix
}

for (var g = 0; g < 70; g++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 1
}
for (var h = 0; h < 25; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 2
}
for (var h = 0; h < 35; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 3
}
for (var h = 0; h < 6; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 4
}
for (var h = 0; h < 10; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 5
}

var grassArr = [];
var xotakerArr = [];
var kerparArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y, 2)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var kp = new Kerpar(x, y, 3)
            kerparArr.push(kp)
        }
        else if (matrix[y][x] == 4) {
            var kp1 = new Kerpar1(x, y, 4)
            kerpar1Arr.push(kp1)
        }
        else if (matrix[y][x] == 5) {
            var kp2 = new Kerpar2(x, y, 5)
            kerpar2Arr.push(kp2)
        }

    }
}
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            rect(x * side, y * side, side, side)



        }
    }



    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat()

        xotakerArr[i].move()

        xotakerArr[i].mult()
        xotakerArr[i].die()


    }



    for (var i in kerparArr) {
        kerparArr[i].eat()

        kerparArr[i].move()
        kerparArr[i].mult()
        kerparArr[i].die()

    }

    for (var i in kerpar1Arr) {
        kerpar1Arr[i].eat()

        kerpar1Arr[i].move()

        kerpar1Arr[i].mult()


        kerpar1Arr[i].die()


    }

    for (var i in kerpar2Arr) {
        kerpar2Arr[i].eat()

        kerpar2Arr[i].move()

        kerpar2Arr[i].mult()
        kerpar2Arr[i].die()



    }


}

