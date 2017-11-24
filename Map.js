var greenSq = new Image();
var orangeSq = new Image();
var redDot = new Image();
greenSq.src = '/assets/greenpic.png';
orangeSq.src = '/asssets/orangepic.png';
redDot.src = '/assets/reddot.jpg';


class Map{
	constructor(rows, cols){
		this.rows = rows;
		this.cols = cols;
		this.tileSize = 30;
		this.grid = new Array(this.rows);
		for(var i = 0; i < this.rows; i++){
			this.grid[i] = new Array(this.cols);
		}
    }

    init(){
        var counter = 0;
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.cols; j++){	
                this.grid[i][j] = 0;
                counter++;			
            }
        }
        canvas.width = this.tileSize * this.grid[0].length;
        canvas.height = this.tileSize * this.grid.length;
    }

    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //userMove(John, myMap);
        //userMove(Sally, myMap);
        //userMove(Debbie, myMap);
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.cols; j++){
                if (this.grid[i][j] == 0){
                    ctx.drawImage(greenSq,j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }else if (this.grid[i][j] == 1){
                    ctx.drawImage(redDot, j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }else{
                    ctx.fillStyle = 'red';
                    ctx.fillRect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }
            }    
        }
    }
}
