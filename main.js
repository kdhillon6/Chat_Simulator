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


<<<<<<< HEAD
//Draw rectangles for grid
function draw(Map){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//initMap(myMap);	
	userMove(John, myMap);
	userMove(Sally, myMap);
	userMove(Debbie, myMap);

	for(var i = 0; i < myMap.rows; i++){
		for(var j = 0; j < myMap.cols; j++){
			if (myMap.grid[i][j] == 0){
				//ctx.fillStyle = 'green';
				//ctx.fillRect(j*Map.tileSize, i*Map.tileSize, Map.tileSize, Map.tileSize);
				ctx.drawImage(greenSq,j*myMap.tileSize, i*myMap.tileSize, myMap.tileSize, myMap.tileSize);
			}else if (myMap.grid[i][j] == 1){
				//ctx.fillStyle ='orange';
				//ctx.fillRect(j*Map.tileSize, i*Map.tileSize, Map.tileSize, Map.tileSize);
				ctx.drawImage(redDot, j*myMap.tileSize, i*myMap.tileSize, myMap.tileSize, myMap.tileSize);
			}else{
				ctx.fillStyle = 'red';
				ctx.fillRect(j*Map.tileSize, i*Map.tileSize, Map.tileSize, Map.tileSize);
			}
		}
	}
	
	//for (user in userArray){
	//	userMove(user);
	//}
	//
}

//create Map, initialize and begin drawing
//Replace draw() with new loop (?)
var myMap = new Map(10,10);
var John = new User(John);
var Sally = new User(Sally);
var Debbie = new User(Debbie);
initMap(myMap);

//draw(myMap);
userMove(John, myMap);
userMove(Sally, myMap);
userMove(Debbie, myMap);
draw(myMap); 

window.setInterval(function (){draw()}, 500);
/*userMove(John, myMap);
userMove(Sally, myMap);
userMove(Debbie, myMap);
draw(myMap);

userMove(John, myMap);
userMove(Sally, myMap);
userMove(Debbie, myMap);
draw(myMap);

userMove(John, myMap);
userMove(Sally, myMap);
userMove(Debbie, myMap);
draw(myMap);

userMove(John, myMap);
userMove(Sally, myMap);
userMove(Debbie, myMap);
draw(myMap);

*/
=======
//So apprentlly it has to be in window.onload and then setinterval has to be in clouser
// SO function () { out function !!!}
window.onload = function() {
  let player1 = setInterval(function(){ John.randomMove(gameMap); }  ,300);
  let player2 = setInterval( function() {Sally.randomMove(gameMap); } ,300);
  let player3 = setInterval( function() {Debbie.randomMove(gameMap); } ,300);
  let draw = setInterval(function() { gameMap.draw(); }  , 400);

}





// //gameMap.init();
>>>>>>> 95f6080fa3bfadf0455066f8a4820d2960bc4ddf
