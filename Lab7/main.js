const CANVAS_SIZE = 1000;
/**
 * @author Dion Buckley
 * Lab to handle basic touch events
 * use device sim
 * then more advanced touch events
 */
function main()
{
    this.ongoingTouches = [];
    this.time1 = 0;
    this.swipeStartX = 0;
    this.swipeStartY = 0;
    this.ctx = {};   
    var canvas = document.createElement("canvas");

    // this will report false while running on a non-touch device and true otherwise
    console.log(is_touch_device());
    canvas.id = 'mycanvas';
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    canvas.style="border:2px solid"
    ctx = canvas.getContext("2d");
    ctx.font = '32px arial';
    document.body.appendChild(canvas);
    canvas.addEventListener("touchstart", onTouchStart);  
    canvas.addEventListener("touchmove", onTouchMove);  
    canvas.addEventListener("touchend", onTouchEnd);  
}
