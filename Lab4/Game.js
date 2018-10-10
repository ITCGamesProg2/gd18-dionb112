class Game
{
    constructor() 
    {        
        this.ctx = {};
        this.initCanvas();
        this.scene = new Scene('T I T L E');
        this.scene.render(this.ctx);

        this.sceneManager = new SceneManager();
        this.sceneManager.addScene(this.scene);
        this.sceneManager.goToScene(this.scene.title)
        this.sceneManager.goToNextScene(this.scene.title)

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
