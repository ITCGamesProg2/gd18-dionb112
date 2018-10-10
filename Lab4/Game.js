CANVAS_SIZE = 1000;
class Game
{
    constructor() 
    {        
        this.ctx = {};
        this.initCanvas();
        this.scene = new Scene('S C E N E ');
        this.sceneManager = new SceneManager();
        this.titleScene = new TitleScene('T I T L E  S C E N E ', 'RED');
        this.menuScene = new MenuScene('M E N U  S C E N E', 'BLUE');

        this.sceneManager.addScene(this.scene);
        this.sceneManager.addScene(this.titleScene);
        this.sceneManager.addScene(this.menuScene);

        this.sceneManager.goToScene(this.scene.title);
        this.sceneManager.goToNextScene();
        //this.sceneManager.goToNextScene();
        //this.sceneManager.goToNextScene();


        this.sceneManager.render(this.ctx);

    }
    initCanvas()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);
        this.ctx.font = '48px arial';
    }
}
