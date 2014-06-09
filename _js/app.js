(function(){

var app = angular.module('basePoesia',[]);

app.controller('VersosController', function(){
  this.versos = versos_baleia;
});


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

app.directive('videoPlayer', function(){

  return{
    restrict:'E',
    templateUrl: '_template/video-player.html',
};
});


var versos_baleia = [
  {
    "id":1,
    "verso":"um enorme rabo de baleia",
    "begin":"0:00:10",
    "end":"0:00:13"
  },
  {
    "id":2,
    "verso":"cruzaria a sala nesse momento",
    "begin":"0:00:14",
    "end":"0:00:16"
  },
  {
    "id":3,
    "verso":"sem barulho algum o bicho",
    "begin":"0:00:17",
    "end":"0:00:19"
  },
  {
    "id":4,
    "verso":"afundaria nas tábuas corridas",
    "begin":"0:00:20",
    "end":"0:00:22"
  },
  {
    "id":5,
    "verso":"e sumiria sem que percebêssemos",
    "begin":"0:00:23",
    "end":"0:00:25"
  },
  {
    "id":6,
    "verso":"no sofá a falta de assunto",
    "begin":"0:00:26",
    "end":"0:00:28"
  },
  {
    "id":7,
    "verso":"o que eu queria mas não te conto",
    "begin":"0:00:29",
    "end":"0:00:31"
  },
  {
    "id":8,
    "verso":"é abraçar a baleia mergulhar com ela",
    "begin":"0:00:32",
    "end":"0:00:34"
  },
  {
    "id":9,
    "verso":"sinto um tédio pavoroso desses dias",
    "begin":"0:00:35",
    "end":"0:00:37"
  },
  {
    "id":10,
    "verso":"de água parada acumulando mosquito",
    "begin":"0:00:38",
    "end":"0:00:40"
  },
  {
    "id":11,
    "verso":"apesar da agitação dos dias",
    "begin":"0:00:41",
    "end":"0:00:43"
  },
  {
    "id":12,
    "verso":"da exaustão dos dias",
    "begin":"0:00:44",
    "end":"0:00:46"
  },
  {
    "id":13,
    "verso":"o corpo que chega exausto em casa",
    "begin":"0:00:47",
    "end":"0:00:49"
  },
  {
    "id":14,
    "verso":"com a mão esticada em busca",
    "begin":"0:00:50",
    "end":"0:00:52"
  },
  {
    "id":15,
    "verso":"de um copo d’água",
    "begin":"0:00:53",
    "end":"0:00:55"
  },
  {
    "id":16,
    "verso":"a urgência de seguir para uma terça ",
    "begin":"0:00:56",
    "end":"0:00:58"
  },
  {
    "id":17,
    "verso":"ou quarta boia e a vontade ",
    "begin":"0:00:59",
    "end":"0:01:01"
  },
  {
    "id":18,
    "verso":"é de abraçar um enorme ",
    "begin":"0:01:02",
    "end":"0:01:04"
  },
  {
    "id":19,
    "verso":"rabo de baleia seguir com ela",
    "begin":"0:01:05",
    "end":"0:01:07"
  }
];




})();
