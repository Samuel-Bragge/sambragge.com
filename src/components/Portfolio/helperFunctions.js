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
