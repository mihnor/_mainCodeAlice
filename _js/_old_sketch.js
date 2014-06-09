

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

function colorHexRgb(hex){
  var colorRGB = [];
  var r = hexToRgb(hex).r;
  var g = hexToRgb(hex).g;
  var b = hexToRgb(hex).b;

  colorRGB = [r,g,b];
  return colorRGB;

};
//returns an array of colors, with the new sintax from colors with p5js. the input is
function colorsHexToRgb(arrayColors){

  var arrayColorsRGB = [];
  for(var i = 0 ; i < arrayColors.length ; i++){
    arrayColorsRGB[i] = colorHexRgb(arrayColors[i]);
    // alert(arrayColorsRGB[i]);

  };

  return arrayColorsRGB;

};


//------------------- ------------------- -------------------
//SKETCH0

var s0 = function( sketch ) {

  var gray = 0;
  var h = 10;
  var cnv;

  sketch.setup = function() {
    cnv = sketch.createCanvas(400, 400);
    cnv.mousePressed(increaseH);
    cnv.position(0,0);
    sketch.rectMode(sketch.CENTER);
    sketch.print("both gray values should change, rect in sketch0 should change only when clicking on canvas0");
  };

  sketch.draw = function() {
    // sketch.background(gray);
    sketch.rect(sketch.width/2, sketch.height/2, h, h);


  };

  // sketch.mousePressed = function() {
  //   gray += 10;
  // };

  sketch.mouseMoved = function() {
    sketch.print("sketch0 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  };

  function increaseH() {
    h += 5;
  }
};




//------------------- ------------------- -------------------
//------------------- ------------------- -------------------
//------------------- ------------------- -------------------
//------------------- ------------------- -------------------
//SKETCH1

var s1 = function( sketch ) {
//
var count = 500;
var radius = 3;
//
var sites = [];
// sites = new PVector[];
var radii = [];
var colors = ['#0B4A4B',"#196559","#FF9E37","#FF782D","#FA4C2D"];

var colorsRGB = [];


//
// // PVector[] sites = new PVector[count];
// // float[] radii = new float[count];
// // int[] colors = new int[5]{ 0x0B4A4B,0x196559,0xFF9E37,0xFF782D,0xFA4C2D };
//

 var cnv;
sketch.setup = function()
{
    cnv = sketch.createCanvas(1024, 768);
    cnv.position(0,0);

    // alert(colorRGB);
    colorsRGB = colorsHexToRgb(colors);
    // sketch.background(colorsRGB[4]);
    sketch.noStroke();
    sketch.noFill();
    sketch.reset();
    // sketch.createHTML(<h1>POESIA</h1>);


};
//
sketch.draw = function(){



    if( sites === null ) return;
//
    for( var i = 0; i < count; i++ )
    {
//
//
        sketch.fill( colorsRGB[(i+1) % colorsRGB.length] );
        sketch.ellipse( sites[i].x, sites[i].y, radii[i], radii[i] );
        radii[i]--;
        radii[i]--;
//
    }
//
    if ( radii[ 0 ] <= -2*radius )
    {
        sketch.reset();
    }

//
};
sketch.reset = function()
{
    for( var i = 0; i < count; i++ )
    {   sites[i] = new PVector();
        sites[i].set(sketch.random(sketch.width), sketch.random(sketch.height));
        radii[i] = radius;
    };
};
// //
sketch.mousePressed = function()
{
    sketch.reset();
    sketch.loop();

    sound.pause();
}
//
//
//
};
//
// var myp5_1 = new p5(s1, 'div1');
var myp5_0 = new p5(s0, 'div0');
