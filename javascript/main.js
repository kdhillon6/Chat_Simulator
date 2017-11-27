let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

var userArray = new Array();
var userIdCounter = 0;



/*
//How to reference zones from Map.grid?
class Zone{
	constructor(locationX, locationY){
		this.location = [locationX, locationY];
		this.numUsers = 0;
		this.numConvos = 0;
		this.convoState = false;
	}
}
//Zones -- Maybe abandon this idea
function initZone(x, y, num,){
	document.write("Not yet implemented")
}*/




var gameMap = new Map(31,38, ctx);
gameMap.init();
var John = new User(gameMap);
var Sally = new User(gameMap);
var Debbie = new User(gameMap);


//So apprentlly it has to be in window.onload and then setinterval has to be in clouser
// SO function () { out function !!!}
window.onload = function() {
  let mainTimer= setInterval(function(){
    John.randomMove(gameMap);
    Sally.randomMove(gameMap);
    Debbie.randomMove(gameMap);
     gameMap.draw();
   }  , 150);
}
