express = require('express');
app = express();
server = require('http').Server(app);
io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
fs = require("fs");
server.listen(8080);

Grass = require("./Grass.js");
Xotaker = require("./Xotaker.js");
Kerpar = require("./Kerpar.js");
Kerpar1 = require("./Kerpar1.js");
Kerpar2 = require("./Kerpar2.js");



matrix = [];
matrix = fillMatrix(30, 30);
console.log(matrix);
function fillMatrix(n, m) {
    
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {

            matrix[i].push(0);
        }
    }
    return matrix;
}

for (var g = 0; g < 70; g++) {
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    matrix[y][x] = 1;
}
for (var h = 0; h < 25; h++) {
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    matrix[y][x] = 2;
}
for (var h = 0; h < 35; h++) {
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    matrix[y][x] = 3;
}
for (var h = 0; h < 6; h++) {
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    matrix[y][x] = 4
}
for (var h = 0; h < 10; h++) {
    var x = Math.floor(Math.random() * 30);
    var y = Math.floor(Math.random() * 30);
    matrix[y][x] = 5;
}

grassArr = [];
xotakerArr = [];
kerparArr = [];
kerpar1Arr = [];
kerpar2Arr = [];

grassyTaracvec =0;
xotakeryKerav =0;
xotakeryBazmacav =0;
gishatichyCnvec =0;
mardyQaylec =0;
marduQanak =0;
mardakeryKerav =0;
mardakeryQanak =0;




for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
            grassyTaracvec++;
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y, 2);
            xotakerArr.push(xt);
            xotakeryKerav ++;
            xotakeryBazmacav ++;
        }
        else if (matrix[y][x] == 3) {
            var kp = new Kerpar(x, y, 3);
            kerparArr.push(kp);
            gishatichyCnvec ++;
        }
        else if (matrix[y][x] == 4) {
            var kp1 = new Kerpar1(x, y, 4);
            kerpar1Arr.push(kp1);
            mardyQaylec ++;
            marduQanak ++;
        }
        else if (matrix[y][x] == 5) {
            var kp2 = new Kerpar2(x, y, 5);
            kerpar2Arr.push(kp2);
            mardakeryKerav ++;
            mardakeryQanak ++;
        }

    }
}


statistics = {"objarr":[]};

setInterval(function(){
    statistics.objarr.push({
        "Խոտը տարածվեց" : grassyTaracvec,
        "Խոտի քանակ" : grassArr.length,
        "Խոտակերը կերավ" : xotakeryKerav,
        "Խոտակերը բազմացավ" : xotakeryBazmacav,
        "Գիշատիչ ծնվեց" : gishatichyCnvec,
        "Մարդը քայլեց" :mardyQaylec,
        "Մարդկանց քանակը" :kerpar1Arr.length ,
        "Մարդակերը կերավ" :mardakeryKerav,
        "մարդակերի քանակ" :kerpar2Arr.length ,
        
        
    });
   fs.writeFile("Statistic.json",JSON.stringify(statistics,null,3),function(err){
       if(err) throw err;
   })
},13000);

function drawServerayin() {

    for (var i in grassArr) {
        grassArr[i].mult();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        xotakerArr[i].move();
        xotakerArr[i].mult();
        xotakerArr[i].die();
    }



    for (var i in kerparArr) {
        kerparArr[i].eat();
        kerparArr[i].move();
        kerparArr[i].mult();
        kerparArr[i].die();

    }

    for (var i in kerpar1Arr) {
        kerpar1Arr[i].eat();
        kerpar1Arr[i].move();
        kerpar1Arr[i].mult();
        kerpar1Arr[i].die();
    }

    for (var i in kerpar2Arr) {
        kerpar2Arr[i].eat();
        kerpar2Arr[i].move();
        kerpar2Arr[i].mult();
        kerpar2Arr[i].die();
    }
    console.log(matrix);
    io.sockets.emit("matrix",matrix);

}
 
weather ="garun"
function ex(){
    if (weather == "garun"){
        weather="amar"
    }
    else if (weather == "amar"){
        weather="ashun"
    }
    else if (weather == "ashun"){
        weather="dzmer"
    }
    else if (weather == "dzmer"){
        weather="garun"
    }
    io.sockets.emit("weather",weather)
}

setInterval(drawServerayin, 250);
setInterval(ex, 1000);
