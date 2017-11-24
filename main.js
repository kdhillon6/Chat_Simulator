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




var gameMap = new Map(26,52);
gameMap.init();
var John = new User(gameMap);
var Sally = new User(gameMap);
var Debbie = new User(gameMap);
//gameMap.init();
window.setInterval(gameMap.draw(), 500);
window.setInterval(John.randomMove(gameMap),500);
window.setInterval(Sally.randomMove(gameMap),500);
window.setInterval(Debbie.randomMove(gameMap),500);