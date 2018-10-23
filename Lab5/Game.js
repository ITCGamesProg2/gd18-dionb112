// Global var (no const in js)
CANVAS_SIZE = 1000;
MOVEMENT = 42;

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
        this.boundRecursiveUpdate = this.update.bind(this);
        this.boundDraw = this.draw.bind(this);
        this.isGoalAlive = true;
    }
    /**
     * See canvas as local var here but ctx as object of this class
     * to use elsewhere
     */
    initWorld()
    {
        console.log('Initialising Game World');
        this.player = new Player(42, 42, 42, 42, 255);
        this.goal = new Goal(420, 420, 42, 42);
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        // append to HTML document
        document.body.appendChild(canvas);
        this.ctx.font = '42px arial';
        document.addEventListener("keydown", this.keyDownHandler.bind(null, this.player));
 
    }
    update()
    {
        this.boundDraw();
        console.log('game updating...');
        if(this.player.checkCollision(this.goal))
        {
            this.collisionResponse();
        }
        // recursion, currently maxing out call stack size *
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }
    draw()
    {
        console.log('game drawing...');
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);  
        this.player.draw(this.ctx);
        if (this.isGoalAlive)
        {
            this.goal.draw(this.ctx);
        }
        else
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
        this.isGoalAlive = false;
    }
    levelComplete()
    {
        this.ctx.save();
        this.ctx.fillStyle='GREEN';
        this.ctx.font = 'bold 42pt Arial';
        this.ctx.textBaseline = "top";
        this.ctx.fillText("Level COMPLETE!", 250, 420);
        this.ctx.restore();
    }
}
