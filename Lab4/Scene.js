// Reviewer: David Scott - Lot's of comments anyway, one thing I noticed would be
// to split up all of the inherited classes into their own .js files.

/**
 * Base class setup for inheritance of different game scenes.
 * Child classes extend base class and use super() to invoke base code
 */
class Scene
{
    /**
     * Constructor for base class
     * @param {String} title Scene title to be drawn on canvas
     * @param {String} colour Scene Colour to style canvas
     */
    constructor(title, colour) 
    {
        this.title = title;
        this.colour = colour;

    }
    // Two functions simple to print to console for debug
    start()
    {
        console.log(this.title + "  starting");
    }
    stop()
    {
        console.log(this.title + "  stopping");
    }
    /**
     * Render function which will clear the canvas, Colours it based on child colour
     * and prints the text in black (each child will set font styles before invoking super())
     * @param {Object} ctx reference to the context of the canvas, used to draw on canvas
     */
    render(ctx)
    {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);  
        ctx.fillStyle = this.colour;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = 'BLACK';
        ctx.fillText(this.title, 7, 42);
    }
}

class PlayScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '22px verdana';
        super.render(ctx)
    }
}

class MenuScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '33px sans-serif';
        super.render(ctx)
    }
}

class GameOverScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '55px courier';
        super.render(ctx)
    }
}

