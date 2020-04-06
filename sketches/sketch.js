export default (w, h) => (p) => {
  let obj;
  let mousePress = false;
  let x, y, xspeed, yspeed;
  let windowXMin, windowXMax, windowYMin, windowYMax;
  let thetaX, thetaY, thetaZ;
  let thetaDegrade = 0.1;

  p.preload = () => {
    obj = p.loadModel('assets/weird-object-old.obj', true);
  }

  p.setup = () => {
    // p.frameRate(15);
    p.createCanvas(w, h, p.WEBGL);
    p.angleMode(p.RADIANS);

    windowXMax = p.windowWidth * .3;
    windowXMin = windowXMax * -1;

    windowYMax = p.windowHeight * .3;
    windowYMin = windowYMax * -1;

    x = p.random(windowXMin, windowXMax);
    y = p.random(windowYMin, windowYMax);

    xspeed = 1;
    yspeed = 1;

    thetaX = 0;
    thetaY = 0;
    thetaZ = 0;


  }

  p.draw = () => {
    p.background(255);
    x += xspeed;
    y += yspeed;

    p.pointLight(210, 154, 205, 0, -300, 0);
    p.pointLight(112, 120, 229, 0, 300, 0);
    p.ambientLight(40);
    p.push();

    p.translate(x, y);
    p.fill('#FF0000');
    p.scale(3);

    if (mousePress === true){
      console.log('z-tate');
      thetaY = p.frameCount * 0.03 ;
    } else {
      thetaY = p.frameCount * 0.01;
    }
    thetaX = p.frameCount * 0.01;
    thetaZ = p.frameCount * 0.01;


    p.rotateX(thetaX);
    p.rotateY(thetaY);
    p.rotateZ(thetaZ);
    p.ambientMaterial(255);
    // p.specularMaterial(10);
    p.noStroke();
    p.model(obj);

    p.pop();

    if ( (x + 100 <= windowXMin) || (x + 100 >= windowXMax)){
      xspeed *= -1;
    }
    if ( (y + 100 <= windowYMin) || (y + 100 >= windowYMax)) {
      yspeed *= -1;
    }

  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.mouseClicked = () => {
    if (mousePress === false) {
      mousePress = true;
      console.log('pressed');
      setTimeout(() => {
        console.log('done');
        mousePress = false;

      }, 750);
    }
  }
}