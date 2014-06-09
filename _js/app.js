(function(){

var app = angular.module('basePoesia',[]);



app.directive('canvasPanel', function(){

  return{
    restrict:'E',
    templateUrl: '_template/canvas-panel.html',
};
});


app.directive('audioPlayer', function(){

  return{
    restrict:'E',
    templateUrl: '_template/audio-player.html',
};
});

})();
