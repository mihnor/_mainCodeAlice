var isPaused = false;
var sound = new Howl({
  urls: ['_data/rabodebaleia.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
  onend: function() {
    alert('Finished!');
  },
  onpause: function(){
    isPaused = true;
  }
}).play;;
