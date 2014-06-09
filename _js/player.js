$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "RABO DE BALEIA",
            mp3: "_data/rabodebaleia.mp3",
          });
        },
        // swfPath: "/",
        supplied: "mp3"
      });
    });
