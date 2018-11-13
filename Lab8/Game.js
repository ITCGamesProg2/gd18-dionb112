/**
 * Game class with loop for animation
 */
class Game
{
    constructor() 
    {        
        this.ctx = {};
        this.boundRecursiveUpdate = this.update.bind(this);
    }
    initWorld()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        this.ctx.font = '42px arial';
        document.body.appendChild(canvas); 
        console.log('Initialising Game World');
    }
    update()
    {
        console.log('game updating...');
        // recursion, currently maxing out call stack size *
        window.requestAnimationFrame(this.boundRecursiveUpdate);
        this.draw();
    }
    draw()
    {
        console.log('game drawing...');
        this.ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);  
        this.levelComplete();
    }
}
