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
    join(game)
    {
        console.log("at join")
        var message = {};
        message.type = "join"
        if(game.ws.readyState === game.ws.OPEN)
        {
            game.ws.send(JSON.stringify(message))
        }
    }
    initWorld()
    {
        var that = this;

        this.ws = new WebSocket("ws://localhost:8080/wstest");
        // called upon websocket opening
        this.ws.onopen = function() {
        };
        // called when client recieves message
        this.ws.onmessage = function(e)
        {
            var msg = JSON.parse(e.data)
            console.log(msg)
        };

        var joinButton = document.getElementById("join");
        joinButton.addEventListener("click", this.join.bind(null, this));
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
}
