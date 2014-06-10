var s0 = function( sketch ) {

var frame = 1;
var b; //ArrayList<Ball>

//createCanvas
var cnv;


sketch.setup = function(){

    cnv = sketch.createCanvas(768, 1024);
    cnv.position(0,0);

    // sketch.createCanvas(400, 400);
    sketch.background(200);
    // b = new ArrayList<Ball>();
    // b.add(new Ball());
}

sketch.draw = function(){
    switch(frame){
        case 1:
            sketch.frame2();
            // alert("frame2");
            break;
        case 2:
            sketch.frame3();
            // alert("frame3");
            break;
        case 3:
            sketch.frame3();
            // alert("frame3");
            break;
        default:
            break;
    };
};

// sketch.frame0 = function(){
//     sketch.background(50);
//
//     for(var i=b.size()-1; i>=0; i--){
//         Ball ba = b.get(i);
//         ba.update();
//         if(ba.dead()){
//             b.remove(i);
//         }
//         for(var j=b.size()-1; j>=0; j--){
//             if(j != i){
//                 Ball bb = b.get(j);
//
//                 if(50 > sqrt(pow(bb.xPos()-ba.xPos(), 2)+pow(bb.yPos()-ba.yPos(), 2))){
//                     line(bb.xPos(), bb.yPos(), ba.xPos(), ba.yPos());
//                     bb.slow(0.5, true);
//                 }else{
//                     bb.slow(0, false);
//                 }
//             }
//         }
//     }
//     sketch.fill(255, 40);
//     sketch.noStroke();
//     sketch.translate(sketch.mouseX, sketch.mouseY);
//     sketch.ellipse(0, 0, 170, 170);
//     sketch.resetMatrix();
// };

sketch.frame2 = function(){
    sketch.background(50);
    sketch.loadPixels();
    // sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20);
    for (var x = 0; x < sketch.width; x++) {
      for (var y = 0; y < sketch.height; y++) {
        var bright = sketch.random(255);
        sketch.pixels[x+y*sketch.width] = sketch.color(bright);
        // sketch.color(bright);
    };
  };
    sketch.updatePixels();
};

sketch.frame3 = function(){
    sketch.background(0);
    sketch.noStroke();
    sketch.recur(sketch.width/2, sketch.height/2, sketch.width, 8, 20);
    // console.log(sketch.width);
};
//

sketch.recur  = function(x,y,size,life,fil){
    var s;
    var l;
    var f;
     s = size/2;
     l = life-1;
     f = fil+10;
    sketch.fill(fil);

    if(l > 1){

        // sketch.translate(x, y);
        sketch.ellipse(0, 0, size, size);
        // sketch.resetMatrix();
        sketch.recur(x-s/2, y, s, l, f);
        sketch.recur(x+s/2, y, s, l, f);
        sketch.recur(x, y+s/3, s, l, f);
        sketch.recur(x, y-s/3, s, l, f);
    };
};

// sketch.recur = function(var x, var y, var size, var life, var fil){
//     var s = size/2;
//     var l = life-1;
//     var f = fil+10;
//     sketch.fill(fil);
//     if(l > 1){
//         // sketch.translate(x, y);
//         sketch.ellipse(0, 0, size, size);
//         // sketch.resetMatrix();
//         // sketch.recur(x-s/2, y, s, l, f);
//         // sketch.recur(x+s/2, y, s, l, f);
//         // sketch.recur(x, y+s/3, s, l, f);
//         // sketch.recur(x, y-s/3, s, l, f);
//     };
// };

sketch.keyPressed = function(){
    switch(sketch.key){
        case '1':
            frame = 1;
            // alert("1");
            break;
        case '2':
            frame = 2;
            // alert("2");
            break;
        case '3':
            frame = 3;
            // alert("3");
            break;
        default:
            break;
    };
};

// sketch.mousePressed = function(){
//     sketch.switch(frame){
//         case 0:
//             if(sketch.mouseButton == LEFT){
//                 b.add(new Ball());
//             }
//             break;
//         case 1:
//             break;
//         default:
//             break;
//     };
// };

// function Ball(){
//     var size;
//     var speed;
//     var color = {sketch.random(0, 100), sketch.random(100, 255), sketch.random(100, 255)};
//     var strSize;
//     var strColor = {sketch.random(0, 100), sketch.random(50, 200), sketch.random(50, 200)};
//     var x;
//     var xSpeed;
//     var y;
//     var ySpeed;
//     var life;
//     var sl;
//
//     Ball(){
//         sl = 0;
//         xSpeed = sketch.random(-3, 3);
//         ySpeed = sketch.random(-3, 3);
//         life = 400;
//         size = sketch.random(5, 20);
//         strSize = sketch.random(1, 3);
//         x = sketch.mouseX;
//         y = sketch.mouseY;
//     }
//
//     function update(){
//         sketch.strokeWeight(strSize);
//         sketch.stroke(strColor[0], strColor[1], strColor[2], life);
//         sketch.fill(color[0], color[1], color[2], life);
//         sketch.collision();
//         sketch.translate(x, y);
//         sketch.ellipse(0, 0, sketch.noise(life/10)*(size*2), sketch.noise(life/10)*(size*2));
//         if((xSpeed > -3 && xSpeed < 3) && (ySpeed > -3 && ySpeed < 3)){
//             if(xSpeed > 0) xSpeed -= (sl*(-xSpeed/xSpeed));
//             if(xSpeed < 0) xSpeed += (sl*(-xSpeed/xSpeed));
//             if(ySpeed > 0) ySpeed -= (sl*(-ySpeed/ySpeed));
//             if(ySpeed < 0) ySpeed += (sl*(-ySpeed/ySpeed));
//
//         }
//         x += xSpeed;
//         y += ySpeed;
//         life -= 0.3;
//         resetMatrix();
//     }
//
//     function collision(){
//         if(x > sketch.width+size/2){
//             x = -size/2;
//         }
//         if(x < 0-size/2){
//             x = sketch.width+size/2;
//         }
//         if(y > sketch.height+size/2){
//             y = -size/2;
//         }
//         if(y < 0-size/2){
//             y = sketch.height+size/2;
//         }
//     }
//
//     function slow(var sl, var lo){
//         if(lo == true){
//             this.sl -= sl;
//         }else{
//             this.sl = 0;
//         }
//     }
//
//     function xPos(){
//         return x;
//     }
//
//     function yPos(){
//         return y;
//     }
//
//     function dead(){
//         if(life < 1){
//               return true;
//         }
//     }
// }

// function Walker(){
//     var x, y;
//     Walker(){
//
//     }
//
//     function update(){
//
//     }
// }
};

var my_p5TV = new p5(s0, 'div0');
