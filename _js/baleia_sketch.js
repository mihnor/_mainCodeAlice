var s0 = function( sketch ) {

  var gray = 200;
  var h = 200;
  var cnv;

  sketch.setup = function() {
    cnv = sketch.createCanvas(400, 400);
    // cnv.mousePressed(increaseH);
    cnv.position(20,200);
    sketch.rectMode(sketch.CENTER);
    sketch.print("both gray values should change, rect in sketch0 should change only when clicking on canvas0");
  };

  sketch.draw = function() {
    // sketch.background(gray);
    sketch.noFill();
    sketch.rect(sketch.width/2, sketch.height/2, h, h);


  };

  // sketch.mousePressed = function() {
  //   gray += 10;
  // };

  sketch.mouseMoved = function() {
    sketch.print("sketch0 x:"+sketch.mouseX+" y:"+sketch.mouseY);
    sketch.noFill();
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20);
  };

  function increaseH() {
    h += 5;
  }
};

var myp5_0 = new p5(s0, 'div0');
