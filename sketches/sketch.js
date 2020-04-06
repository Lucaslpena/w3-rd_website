export default (w, h) => (p) => {
  let obj;
  let mousePress = false;
  let x, y, xspeed, yspeed;
  let windowXMin, windowXMax, windowYMin, windowYMax;
  let thetaX, thetaY, thetaZ;
  let thetaDegrade = 0.01;

  window.p = p;

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

    xspeed = p.randomGaussian(2);
    yspeed = p.randomGaussian(2);

    thetaX = 0;
    thetaY = 0;
    thetaZ = 0;


  }

  p.draw = () => {
    p.background(255);
    thetaDegrade += 0.01;
    x += (xspeed * p.noise(thetaDegrade));
    y += (xspeed * p.noise(thetaDegrade));

    p.pointLight(210, 154, 205, 400, -400, 0);
    p.pointLight(210, 154, 205, -400, -400, 0);

    p.pointLight(112, 120, 229, 400, 400, 0);
    p.pointLight(112, 120, 229, -400, 400, 0);

    p.ambientLight(30);
    p.ambientMaterial(255);
    p.noStroke();

    p.push();

    p.translate(x, y);
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
    // p.specularMaterial(10);
    p.noStroke();
    p.model(obj);

    p.pop();
    p.push();
    p.translate(p.windowWidth * .3, p.windowHeight *.3, -400);
    p.sphere(300);
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