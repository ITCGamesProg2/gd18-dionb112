class SceneManager
{
    constructor()
    {
        this.currentScene = null;
        this.scenes = {};
        this.sceneTitles = [];
        this.index = -1;
    }
    addScene(scene)
    {
        this.scenes[scene.title] = scene;
        this.sceneTitles.push(scene.title);
    }
    goToScene(title)
    {
        if ( this.currentScene != null)
        {
            this.currentScene.stop();
        }

        // do more
        this.currentScene = title;
       // this.currentScene.start();

    }
    goToNextScene()
    {
        if (index <  this.sceneTitles.length)
        {
            index++
        }
        else
        {
            index = 0;
        }
        // again do more
        this.currentScene =  this.sceneTitles[index]
    }
}