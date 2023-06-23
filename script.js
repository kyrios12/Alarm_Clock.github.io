document.addEventListener('mousemove',(e) =>{
    console.log(e)
    const mouX = e.clientX;
    const mouY = e.clientY;
    const anchor = document.getElementById('anchor');
    const recht = anchor.getBoundingClientRect();
    const anchorX = recht.left+recht.width/2;
    const anchorY = recht.top+recht.height/2;
    const angleDeg = angle(mouX,mouY,anchorX,anchorY);
    console.log(angleDeg);
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${240+angleDeg}deg)`
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`
    })
})
function angle(ex,ey,cx,cy){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad*180/Math.PI;
    return deg;
}