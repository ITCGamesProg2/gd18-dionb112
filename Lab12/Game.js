// Global var (no const in js)
CANVAS_SIZE = 1000;
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
        if(game.ws.readyState === game.ws.OPEN){
            return true;
        }
        else{
            return false;
        }
    }
    join(game){
        var message = {};
        message.type = "join"

        if (game.checkReady){
            game.ws.send(JSON.stringify(message))
        }
    }
    gameOver(game){
        var message = {};
        message.type = 'gameOver'

        if (game.checkReady){
            game.ws.send(JSON.stringify(message))
        }
    }
    initWorld(){
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
        document.addEventListener("click", this.clickHandler.bind(null, this));
    }
    handleMessage(game, evt)
    {
        var msg = JSON.parse(evt.data)
        if (msg.type == "updateState"){
            game.updateLocalState(msg)
        }
        else{
            // for now the game state messages like this
            console.log(msg)
        }
    }
    /** function called to handle clicks,
     *  goes to next scene and renders it
    */
    clickHandler(game, e)
    {
        game.updateState(e);
    }
    updateState(e)
    {
        var state = {};
        state.type = "updateState"
        state.data = {x: e.offsetX, y: e.offsetY};
        if (this.checkReady){
            this.ws.send(JSON.stringify(state))
        }
    }
    updateLocalState(msg)
    {
        console.log(msg.data)
    }
}
