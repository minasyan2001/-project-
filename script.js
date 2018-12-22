
var side = 35
var socket = io();
var m = 30;
var n = 30;
weather ="garun"

function setup() {
    frameRate(5);
    createCanvas(m * side, n * side);
    background('#acacac');
}


socket.on("weather", function (data) {
    weather = data;
});

function drawmatrix(matrix) {
    console.log(weather);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && weather != "dzmer") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && weather == "dzmer") {
                fill("lime");
            }
            else if (matrix[y][x] == 2 && weather != "dzmer") {
                fill("yellow");
            }
            else if (matrix[y][x] == 2 && weather == "dzmer") {
                fill("olive");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3 && weather != "dzmer") {
                fill("red");
            }
            else if (matrix[y][x] == 3 && weather == "dzmer") {
                fill("maroon");
            }
            else if (matrix[y][x] == 4 && weather != "dzmer") {
                fill("blue");
            }
            else if (matrix[y][x] == 4 && weather == "dzmer") {
                fill("aqua");
            }
            else if (matrix[y][x] == 5 && weather != "dzmer") {
                fill("purple");
            }
            else if (matrix[y][x] == 5 && weather == "dzmer") {
                fill("fuchsia");
            }
            rect(x * side, y * side, side, side)



        }
    }
}


socket.on("matrix", drawmatrix);
