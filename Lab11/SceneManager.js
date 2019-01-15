/**
 * Here the Scene Manager class
 * Adds scenes, goes to specific scene and goes to next scene
 * also renders current scene
 */
class SceneManager
{
    constructor()
    {
        // curr scene, starts at null
        this.currentScene = null;
        // js object filled up to be a dict later
        this.scenes = {};
        // list (array)
        this.sceneTitles = [];
        // index tp use in list
        this.index = -1;
    }
    /**
     * Add scene (update dict and list)
     * @param {Object} scene entire scene instance passed, it's title is used to set key for dict and populate list. the instance reference itself is used to populate dict value
     */
    addScene(scene)
    {
        this.scenes[scene.title] = scene;
        this.sceneTitles.push(scene.title);
    }
    /**
     * Go to a specified scene, stop curr scene (if one has been at - not null), start the specified scene after dict lookup (use instance of scene)
     * @param {String} title simply use the scenes title as the dict key to get the scene object and set that to current scene
     */
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
    /**
     * Go to next scene, wrap around if at end already
     */
    goToNextScene()
    {
        // Update the current index with a list index lookup
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
    /**
     * Render current scene
     * @param {Object} ctx again use canvas context to draw (pass it forward)
     */
    render(ctx)
    {
        this.currentScene.render(ctx);
    }
}