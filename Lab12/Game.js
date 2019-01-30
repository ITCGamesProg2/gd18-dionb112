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
        this.initCanvas();
        this.sceneManager = new SceneManager();
        this.titleScene = new PlayScene('P L A Y  G A M E', 'RED');
        this.menuScene = new MenuScene('M A I N  M E N U ', 'BLUE');
        this.gameOverScene = new GameOverScene('G A M E  O V E R', 'GREEN');
        this.sceneManager.addScene(this.menuScene);
        this.sceneManager.addScene(this.titleScene);
        this.sceneManager.addScene(this.gameOverScene);

        this.sceneManager.goToScene(this.menuScene.title);
        this.sceneManager.render(this.ctx);
    }
    /**
     * See canvas as local var here but ctx as object of this class
     * to use elsewhere
     */
    initCanvas()
    {
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        canvas.style="border:2px solid"
        this.ctx = canvas.getContext("2d");
        // append to HTML document
        document.body.appendChild(canvas);
        this.ctx.font = '48px arial';
    }
}
