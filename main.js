let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var greenSq = new Image();
var orangeSq = new Image();
var redDot = new Image();
var userArray = new Array();
var userIdCounter = 0;
greenSq.src = 'greenpic.png';
orangeSq.src = 'orangepic.png';
redDot.src = 'reddot.jpg';


class Map{
	constructor(rows, cols){
		//document.body.appendChild(canvas);
		this.rows = rows;
		this.cols = cols;
		this.tileSize = 30;
		this.grid = new Array(this.rows);
		for(var i = 0; i < this.rows; i++){
			this.grid[i] = new Array(this.cols);
		}
	}
}

//How to reference zones from Map.grid?
class Zone{
	constructor(locationX, locationY){
		this.location = [locationX, locationY];
		this.numUsers = 0;
		this.numConvos = 0;
		this.convoState = false;
	}
}

class User{
	constructor(){
		this.id = userIdCounter++;
		this.location = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
		//userArray.slice(this);
		console.log(this.location);
		console.log(this.id);
	}
}

//Movement function for users. uses RNG for grid movement
function userMove(User, Map){
	var moveVal = Math.random() * 100;
	var oldY = User.location[0];
	var oldX = User.location[1];

	if(moveVal % 2 == 0){
		//no movement
		return
	}
	else if(moveVal < 25){
		if (User.location[0] - 1 > 0 && User.location[0] - 1 < Map.cols){
			//move left one spot
			User.location[0] -= 1;
		}
	}
	else if(moveVal >= 25 && moveVal < 50){
		if (User.location[0] + 1 > 0 && User.location[0] + 1 < Map.cols){
			//move right one spot
			User.location[0] += 1;
		}
	}
	else if(moveVal >= 50 && moveVal < 75){
		if (User.location[1] - 1 > 0 && User.location[1] - 1 < Map.rows){
			//move down one spot
			User.location[1] -= 1;
		}
		
	}else{
		if (User.location[1] + 1 > 0 && User.location[1] + 1 < Map.rows){	
			//move up one spot
			User.location[1] += 1;
		}
	}
	Map.grid[User.location[0]][User.location[1]] = 1;
	Map.grid[oldY][oldX] = 0;
}

//Zones -- Maybe abandon this idea
function initZone(x, y, num,){
	document.write("Not yet implemented")
}

//Initializes map by creating values for grid
function initMap(Map){
	var counter = 0;
	for(var i = 0; i < myMap.rows; i++){
		for(var j = 0; j < myMap.cols; j++){	
			myMap.grid[i][j] = 0;
			counter++;			
		}
	}
	canvas.width = myMap.tileSize * myMap.grid[0].length;
	canvas.height = myMap.tileSize * myMap.grid.length;
}

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