const CANVAS_SIZE = 1600;
const SPRITE_FRAME = 256;
const FPS = 60;
/**
 * Game class with loop for animation
 */
class Game
{
    constructor() 
    {    
        this.isLoaded = false;
        this.previousTime = 0;
        this.spriteStrip =  new Image();
        this.ctx = {};
        this.boundRecursiveUpdate = this.update.bind(this);
    }
    initWorld()
    {
        var that = this;
         this.spriteStrip.addEventListener('load', function() {
            that.isLoaded = true;
        }, false); 
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
        this.sprite1 = new Sprite(this.ctx, {
            width: SPRITE_FRAME,
            height: SPRITE_FRAME,
            image: this.spriteStrip},
            FPS,
            0,
            0);
        this.sprite2 = new Sprite(this.ctx, {
            width: SPRITE_FRAME,
            height: SPRITE_FRAME,
            image: this.spriteStrip},
            FPS * 2,
            0,
            300);     
    }
    update()
    {
        var now = Date.now();
        var deltaTime = (now - this.previousTime);
        this.previousTime = now;
        this.sprite1.update(deltaTime);
        this.sprite2.update(deltaTime);
        this.draw();
        window.requestAnimationFrame(this.boundRecursiveUpdate);

    }
    draw()
    {
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE); 
         if (this.isLoaded)
        {
            //this.ctx.drawImage(this.spriteStrip, 42, 42);
        } 
        this.sprite1.render();
        this.sprite2.render();

    }
}
