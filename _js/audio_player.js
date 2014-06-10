
// http://www.soundsnap.com/search/audio/ocean/score
var isPaused = false;
var soundMusic = new Howl({
  urls: ['_data/rabodebaleia.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.8,
  onend: function() {

  },
  onload: function(){
  this.play();
  }
});;


var isPaused = false;
var soundOcean = new Howl({
  urls: ['_data/ocean.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.3,
  onend: function() {

  },
onload: function(){
this.play();

}});;
