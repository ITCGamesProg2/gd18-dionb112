var ongoingTouches = [];

function is_touch_device()
{
    return 'ontouchstart' in window;
}
function onTouchStart(e)
{
    e.preventDefault();
    var touches = e.touches;
    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push({   identifier : touches[i].identifier,
                                pageX: touches[i].pageX,
                                pageY: touches[i].pageY });
        ctx.beginPath();
        // a circle to start
        ctx.arc(touches[i].pageX, touches[i].pageY, 4.2, 0, 2.1 * Math.PI, false);  
        ctx.fillStyle = 'black';
        ctx.fill();                                
        console.log(touches[i].clientX);
        console.log(touches[i].clientY);
      }

}
function onTouchMove(e)
{
    e.preventDefault();
    var touches = e.changedTouches;
    for (var i = 0; i < touches.length; i++)
    {
        var index = ongoingTouchIndexById(touches[i].identifier);
        if (index >= 0)
        {   
            ctx.lineWidth = 4.2;
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[index].pageX, ongoingTouches[index].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.stroke();
            // swap in the new touch record
            ongoingTouches.splice(  index, 
                                    1, 
                                    {   identifier : touches[i].identifier,
                                        pageX: touches[i].pageX,
                                        pageY: touches[i].pageY });  
        }
    } 
}
function onTouchEnd(e)
{
    e.preventDefault();
    var touches = e.changedTouches;
    for (var i = 0; i < touches.length; i++)
    {
        var index = ongoingTouchIndexById(touches[i].identifier);
        if (index >= 0)
        {  
            ctx.lineWidth = 4.2;
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[index].pageX, ongoingTouches[index].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            // finish with a square
            ctx.fillRect(touches[i].pageX -4.2, touches[i].pageY -4.2, 8.4, 8.4);
            ongoingTouches.splice(index, 1);  // remove it 
        }
    } 
}
function ongoingTouchIndexById(idIn)
{
    for (var i = 0; i < ongoingTouches.length; i++)
    {
        var id = ongoingTouches[i].identifier;
        if (id == idIn)
        {
            return i;
        }
    }
    return -1;
}
