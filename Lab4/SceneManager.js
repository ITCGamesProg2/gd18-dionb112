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
        
        // lookup the dict using the title as key, 
        // set the value (reference to scene as current)
        this.currentScene = this.scenes[title];
        // Also do a check to ensure the looked up key actually exists
        // before trying to call a function on an undefined scene
        if (undefined !== this.currentScene)
        {
            this.currentScene.start();
        }

    }
    goToNextScene()
    {

        this.index = this.sceneTitles.indexOf(this.currentScene.title);
        // here we set add 1 to the index as far as it remains 
        // at least 1 shorter than the the length (number 1 - index 0)
        // otherwise it wraps around to 0
        this.index = (this.index + 1) % this.sceneTitles.length;
        // Not sure if this function will ever be called when curr = null 
        // but this statement will alow that that case
        if ( this.currentScene != null)
        {
            this.currentScene.stop();
        }
        // this time current scene is set using index (just updated)
        // for the titles list.

        this.currentScene =  this.scenes[this.sceneTitles[this.index]]
        // again check that it actually exists.
        if (undefined !== this.currentScene)
        {
            this.currentScene.start();
        }
    }
    render(ctx)
    {
        this.currentScene.render(ctx);
    }
}