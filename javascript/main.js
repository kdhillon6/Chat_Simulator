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




var gameMap = new Map(26,52, ctx);
gameMap.init();
var John = new User(gameMap);
var Sally = new User(gameMap);
var Debbie = new User(gameMap);


//So apprentlly it has to be in window.onload and then setinterval has to be in clouser
// SO function () { out function !!!}
window.onload = function() {
  let player1 = setInterval(function(){ John.randomMove(gameMap); }  ,300);
  let player2 = setInterval( function() {Sally.randomMove(gameMap); } ,300);
  let player3 = setInterval( function() {Debbie.randomMove(gameMap); } ,300);
  let draw = setInterval(function() { gameMap.draw(); }  , 400);

}





// //gameMap.init();
