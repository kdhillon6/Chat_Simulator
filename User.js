
class User{
	constructor(mainMap){
        this.state = alive;
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
        var moveVal = Math.random() * 100;
        var oldX = this.location[0];
        var oldY = this.location[1];
    
        if(moveVal % 2 == 0){
            //no movement
            return
        }
        else if(moveVal < 25){
            if (User.location[0] - 1 > 0 && User.location[0] - 1 < mainMap.cols){
                //move left one spot
                User.location[0] -= 1;
                mainMap.grid[oldY][oldX] = 0;			
            }
        }
        else if(moveVal >= 25 && moveVal < 50){
            if (User.location[0] + 1 > 0 && User.location[0] + 1 < mainMap.cols){
                //move right one spot
                User.location[0] += 1;
                mainMap.grid[oldY][oldX] = 0;			
            }
        }
        else if(moveVal >= 50 && moveVal < 75){
            if (User.location[1] - 1 > 0 && User.location[1] - 1 < mainMap.rows){
                //move down one spot
                User.location[1] -= 1;
                mainMap.grid[oldY][oldX] = 0;			
            }
            
        }else{
            if (User.location[1] + 1 > 0 && User.location[1] + 1 < mainMap.rows){	
                //move up one spot
                User.location[1] += 1;
                mainMap.grid[oldY][oldX] = 0;			
            }
        }
        mainMap.grid[User.location[0]][User.location[1]] = 1;
    }
}

/*
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
			Map.grid[oldY][oldX] = 0;			
		}
	}
	else if(moveVal >= 25 && moveVal < 50){
		if (User.location[0] + 1 > 0 && User.location[0] + 1 < Map.cols){
			//move right one spot
			User.location[0] += 1;
			Map.grid[oldY][oldX] = 0;			
		}
	}
	else if(moveVal >= 50 && moveVal < 75){
		if (User.location[1] - 1 > 0 && User.location[1] - 1 < Map.rows){
			//move down one spot
			User.location[1] -= 1;
			Map.grid[oldY][oldX] = 0;			
		}
		
	}else{
		if (User.location[1] + 1 > 0 && User.location[1] + 1 < Map.rows){	
			//move up one spot
			User.location[1] += 1;
			Map.grid[oldY][oldX] = 0;			
		}
	}
	Map.grid[User.location[0]][User.location[1]] = 1;
}

*/