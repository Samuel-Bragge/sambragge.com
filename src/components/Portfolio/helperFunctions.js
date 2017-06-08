export const capitalize = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}

export const getMousePos = (canvas, evt)=>{
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}


export const randomColor = ()=>{
    const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    var color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++)
    {
 	  var x = Math.floor((Math.random()*16))
 	  color += rgb[x];
    }
    return color;
}
