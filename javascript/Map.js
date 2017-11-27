var greenSq = new Image();
var orangeSq = new Image();
var redDot = new Image();
greenSq.src = './assets/greenweave1.png';
orangeSq.src = './assets/orangepic.png';
redDot.src = './assets/reddot2.png';


class Map{
	constructor(rows, cols, ctx){
		this.rows = rows;
		this.cols = cols;
		this.tileSize = 30;
		this.grid = new Array(this.rows);
		for(var i = 0; i < this.rows; i++){
			this.grid[i] = new Array(this.cols);
		}
		this.ctx = ctx;
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
			console.log("Drawing:");
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.cols; j++){
                if (this.grid[i][j] == 0){
                    this.ctx.drawImage(greenSq,j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }else if (this.grid[i][j] == 1){
                    this.ctx.drawImage(redDot, j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }else{
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }
            }
        }
    }
}
