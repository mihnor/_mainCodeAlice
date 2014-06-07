(function(){

var app = angular.module('basePoesia',[]);



app.directive('canvasPanel', function(){

  return{
    restrict:'E',
    templateUrl: '_template/canvas-panel.html',
};
});

})();
