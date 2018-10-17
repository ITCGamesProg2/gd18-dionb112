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
        this.initWorld();
    }
    /**
     * See canvas as local var here but ctx as object of this class
     * to use elsewhere
     */
    initWorld()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        // append to HTML document
        document.body.appendChild(canvas);
        this.ctx.font = '42px arial';
        window.alert('Initialising Game World');

    }
    update()
    {
        // recursion, currently maxing out call stack size *
        window.requestAnimationFrame(this.update());
    }
    draw()
    {
        // to buffer
    }

}
