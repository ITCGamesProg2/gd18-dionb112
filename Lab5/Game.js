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
    }
    /**
     * See canvas as local var here but ctx as object of this class
     * to use elsewhere
     */
    initWorld()
    {
        console.log('Initialising Game World');
        this.player = new Player(42,42,42,42, 255);
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        // append to HTML document
        document.body.appendChild(canvas);
        this.ctx.font = '42px arial';
        // this prevents scrolling (default behaviour of some keys)
        window.addEventListener("keydown", function(e)
        {
            // Space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) 
            {
                e.preventDefault();
            }
        }, false); 
        document.addEventListener("keydown", this.keyDownHandler.bind(null, this.player));
 
    }
    update()
    {
        this.boundDraw();
        console.log('game updating...');
        // recursion, currently maxing out call stack size *
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }
    draw()
    {
        console.log('game drawing...');
        this.player.draw(this.ctx);
    }
    keyDownHandler(e, player)
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
    }

}
