class SceneManager
{
    constructor(currentScene = null)
    {
        this.currentScene = currentScene;
        this.scenes = {};
        this.sceneTitles = [];
        this.index = -1;
    }
    addScene(scene)
    {
        scenes['Scene ' + index] = scene;
        sceneTitles[index] = scene;
    }
    goToScene(title)
    {
        //do more
        this.currentScene = title;
    }
    goToNextScene()
    {
        if (index < this.sceneTitles.length)
        {
            index++
        }
        else
        {
            index = 0;
        }
    }
}