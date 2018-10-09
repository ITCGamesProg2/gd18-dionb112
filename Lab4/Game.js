class Game
{
    constructor() 
    {        
        this.ctx = {};
        this.initCanvas();
        var titleScene = new TitleScene('T I T L E');
        titleScene.render(this.ctx);
        // SceneManager is created here
        // this.sceneManager = new SceneManager();
        // sceneManager.render(ctx);
    }
    initCanvas()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = 1000;
        canvas.height = 1000;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);
        this.ctx.font = '48px arial';
    }

}
