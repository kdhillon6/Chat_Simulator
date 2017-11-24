
class User{
	constructor(mainMap){
        this.state = "alive";
		this.id = userIdCounter++;
		this.location = [Math.floor(Math.random()*mainMap.cols), Math.floor(Math.random()*mainMap.rows)];
		console.log(this.location);
        console.log(this.id);
		userArray.push(this);
    }

    statusAssign(newState){
        this.state = newState;
        if(newState = 'dead'){
            var index = userArray.indexOf('this')
            userArray.splice(index,1)
        }
    }

    randomMove(mainMap){
			console.log("Move");
        var moveVal = Math.random() * 100;
        var oldX = this.location[0];
        var oldY = this.location[1];

        if(moveVal % 2 == 0){
            //no movement
            return
        }
        else if(moveVal < 25){
            if (this.location[0] - 1 > 0 && this.location[0] - 1 < mainMap.cols){
                //move left one spot
                this.location[0] -= 1;
                mainMap.grid[oldY][oldX] = 0;
            }
        }
        else if(moveVal >= 25 && moveVal < 50){
            if (this.location[0] + 1 > 0 && this.location[0] + 1 < mainMap.cols){
                //move right one spot
                this.location[0] += 1;
                mainMap.grid[oldY][oldX] = 0;
            }
        }
        else if(moveVal >= 50 && moveVal < 75){
            if (this.location[1] - 1 > 0 && this.location[1] - 1 < mainMap.rows){
                //move down one spot
                this.location[1] -= 1;
                mainMap.grid[oldY][oldX] = 0;
            }

        }else{
            if (this.location[1] + 1 > 0 && this.location[1] + 1 < mainMap.rows){
                //move up one spot
                this.location[1] += 1;
                mainMap.grid[oldY][oldX] = 0;
            }
        }

        mainMap.grid[this.location[1]][this.location[0]] = 1;
				console.log("Main map changed: " +mainMap.grid[this.location[1]][this.location[0]]);
    }
}
