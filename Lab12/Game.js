// Global var 
const CANVAS_SIZE = 1000;
const MOVEMENT = 42;

/**
 * Game class which controls instance of SceneManager,
 * adding in all scene objects and rendering first scene
 * Also setting up the canvas initially
 */
class Game
{
    constructor() 
    {       
        this.ctx = {};
        this.initCanvas();
        this.boundRecursiveUpdate = this.update.bind(this);
        this.isGameOver = false;
        this.gameStarted = false;
    }
    update()
    {
        // do bound update etc
        this.render(this.ctx)
    }
    render(ctx)
    {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);  
        ctx.fillStyle = this.colour;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = 'BLACK';
        ctx.fillText(this.title, 7, 42);
    }
    checkReady(){
        if(this.ws.readyState === this.ws.OPEN){
            return true;
        }
        else{
            return false;
        }
    }
    join(game){
        var message = {};
        message.type = "join"

        if (game.checkReady()){
            game.ws.send(JSON.stringify(message))
        }
    }
    gameOver(game){
        var message = {};
        message.type = 'gameOver'
        game.gameStarted = false;
        if (game.checkReady()){
            game.ws.send(JSON.stringify(message))
        }
    }
    initWorld(){
        this.player = new Player(50,  50, 42, 42, 255);
        this.otherPlayer = new Player(100, 100, 42, 42, 0);

        var that = this;

        this.ws = new WebSocket("ws://localhost:8080/wstest");

        // called upon websocket opening
        this.ws.onopen = function() {
        };
        this.ws.addEventListener('message', this.handleMessage.bind(null, this));

        var joinButton = document.getElementById("join");
        joinButton.addEventListener("click", this.join.bind(null, this));

        var gameOverButton = document.getElementById("gameOver");
        gameOverButton.addEventListener("click", this.gameOver.bind(null, this));
        
		document.addEventListener("keydown", this.keyDownHandler.bind(null, this.player));
}
    initCanvas()
    {
        var canvas = document.createElement("canvas");

        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"

        this.ctx = canvas.getContext("2d");
        this.ctx.font = '48px arial';

        document.body.appendChild(canvas);
    }
    handleMessage(game, evt)
    {
        var msg = JSON.parse(evt.data)
        if (msg.type == "updateState"){
                game.updateFromNet(msg.data)
            }
        else{
            // for now the game state messages like this
            console.log(msg)
        }
        if (!game.gameStarted)
        {
            if (msg.data == "GAME_IN_PROGRESS"){
                
                game.gameStarted = true;
            }
        }
        

    }
	update()
    {
        this.draw();
		if (!this.isGameOver){
			if(this.player.checkCollision(this.otherPlayer))
			{
				this.collisionResponse();
			}
			// recursion, currently maxing out call stack size *
            window.requestAnimationFrame(this.boundRecursiveUpdate);
            if (this.checkReady()){
                if (this.gameStarted){
                    this.updateState(this.player.x, this.player.y);
                }
            }
		}
    }
    updateFromNet(data)
    {
        this.otherPlayer.x = data.x;
        this.otherPlayer.y = data.y;
    }
    draw()
    {
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);  
        this.player.draw(this.ctx);
        this.otherPlayer.draw(this.ctx);
        if (this.isGameOver)
        {
            this.levelComplete();
        }
    }
	keyDownHandler(player, e)
    {
        switch (e.keyCode)
        {
        case 38:
            player.move(0,-MOVEMENT);
            break;
        case 37:
            player.move(-MOVEMENT, 0);
            break;
        case 39:
            player.move(MOVEMENT, 0);
            break;
        case 40:
            player.move(0, MOVEMENT);
            break;
        }
        // Space and arrow keys, this prevents scrolling (default behaviour of some keys)
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) 
        {
            e.preventDefault();
        }
    }
    collisionResponse()
    {
        this.isGameOver = true;
    }
    // Using stack here to push and pop canvas stylings
    levelComplete()
    {
        this.ctx.save();
        this.ctx.fillStyle='GREEN';
        this.ctx.font = 'bold 42pt Arial';
        this.ctx.textBaseline = "top";
        this.ctx.fillText("Level COMPLETE!", 250, 420);
        this.ctx.restore();
    }
    updateState(xCoord, yCoord)
    {
        var state = {};
        state.type = "updateState"
        state.data = {x: xCoord, y: yCoord};
        if (this.checkReady()){
            this.ws.send(JSON.stringify(state))
        }
    }
    updateLocalState(msg)
    {
        console.log(msg.data)
    }
}
