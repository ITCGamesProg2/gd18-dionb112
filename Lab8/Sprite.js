/**
 * Constructor function to initialise this sprite with the canvas context
 *  and a set of image options. The image options specify both image and
 *  animation properties. For example, image width, image height, the image
 *  object and the y coordinate where the image should be drawn.
 *  The animation properties include the ticks per frame and number of 
 *  frames.
 * @param {context} context The 2D context for the canvas.
 * @param {Object} imageOptions An object describing the image and animation     
 *                  properties.
 */
class Sprite 
{
    constructor(context, imageOptions)
    {
       this.width = imageOptions.width;
       this.height = imageOptions.height;
       this.image = imageOptions.image;
       this.ctx = context;
       this.frameIndex = 0;
       this.tickCount = 0;
       this.ticksPerFrame = 1000 / 60;
       this.numberOfFrames = 6 || 1; 
   }
   update()
   {
       this.tickCount++;
       if (this.tickCount > this.ticksPerFrame)
       {
           this.tickCount = 0;
           if (this.frameIndex < this.numberOfFrames - 1)
           {
            this.frameIndex++;
           }
           else
           {
            this.frameIndex = 0;
           }
       }
   }
   render()
   {
       this.ctx.drawImage(
           this.image,
           this.frameIndex * this.width ,
           0,
           this.width ,
           this.height,
           0,
           0,
           this.width ,
           this.height);
   }
}
