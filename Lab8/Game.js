const CANVAS_SIZE = 1600;
const SPRITE_FRAME = 256;
/**
 * Game class with loop for animation
 */
class Game
{
    constructor() 
    {    
        // this.isLoaded = false;
        this.spriteStrip =  new Image();
        this.ctx = {};
        this.boundRecursiveUpdate = this.update.bind(this);
        this.boundDraw = this.draw.bind(this);
    }
    initWorld()
    {
        /** this.spriteStrip.addEventListener('load', function() {
            this.isLoaded = true;
        }, false); */
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        this.ctx.font = '42px arial';
        document.body.appendChild(canvas); 
        // source for sprite strip
        this.spriteStrip.src = 'spritestrip.png';
        // create sprite
        this.sprite = new Sprite(this.ctx, {
            width: SPRITE_FRAME,
            height: SPRITE_FRAME,
            image: this.spriteStrip  
        });
    }
    update()
    {
        window.requestAnimationFrame(this.boundRecursiveUpdate);
        this.sprite.update();
        this.boundDraw();
    }
    draw()
    {
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE); 
        /** if (this.isLoaded)
        {
            this.ctx.drawImage(this.spriteStrip, 42, 42);
        } */
        this.sprite.render();
    }
}
