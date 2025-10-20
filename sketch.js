let nuvolasinx = -150;       // partenza fuori dallo schermo
let balloonx = 200;
let nuvoleFinite = false;    // necessario per apparizione sole

function setup() {
  createCanvas(400, 400);
  frameRate(25);
}

function draw() {
  // cielo
  background(135, 206, 235);

  // montagna destra
  strokeWeight(0);
  fill("gray");
  triangle(40, 400, 260, 60, 480, 400);
  fill("lightgrey");
  triangle(70, 400, 260, 65, 480, 400);
  fill("white");
  triangle(212, 150, 260, 65, 317, 150);

  // neve montagna destra
  fill("white");
  ellipse(228, 153, 30);
  ellipse(247, 150, 20);
  ellipse(265, 150, 40);
  ellipse(292, 150, 20);
  ellipse(295, 150, 30);

  // montagna sinistra
  fill("grey");
  triangle(-30, 400, 155, 150, 330, 400);
  fill("lightgrey");
  triangle(0, 400, 155, 155, 330, 400);
  fill("white");
  triangle(120, 210, 155, 155, 195, 210);

  // neve montagna sinistra
  fill("white");
  ellipse(128, 213, 15);
  ellipse(158, 210, 20);
  ellipse(141, 207, 17);
  ellipse(175, 207, 17);
  ellipse(187, 212, 15);
  
  /* disegno + passaggio nuvole (una sola volta)
  con !nuvoleFinite controllo che debbano ancora attraversare lo schermo e,
  in seguito, disegno i miei elementi facendoli muovere di 1.5 px
  - una volta che le nuvole sono uscite dallo schermo disegno il sole */
  if (!nuvoleFinite) {
    drawClouds(nuvolasinx);
    nuvolasinx += 1.5;
    if (nuvolasinx > width + 100) {
      nuvoleFinite = true;
    }
  } else {
    drawSun(50, 50);
  }

  // mongolfiera
  fill(255, 100, 100);
  ellipse(balloonx, 67, 40);
  stroke(100);
  strokeWeight(1);
  line(balloonx - 8, 80, balloonx - 6, 95);
  line(balloonx + 8, 80, balloonx + 6, 95);
  fill("brown");
  noStroke();
  rect(balloonx - 6, 95, 12, 12);

  // prato
  fill(123, 179, 105);
  rect(0, 330, 400, 70);

  /* animazione mongolfiera
  partendo dal margine si va a sottrarre il valore generato 
  dall'operazione con frameCount = permette il movimento dx / sx */
  balloonx = (width + 50) - frameCount % (width + 100);
}

// funzione per disegnare tutte le nuvole
function drawClouds(x) {
  strokeWeight(0);
  fill("whitesmoke");
  // centro
  ellipse(x + 170, 55, 60);
  ellipse(x + 205, 65, 60);
  ellipse(x + 240, 55, 60);
  ellipse(x + 205, 35, 60);
  // destra
  ellipse(x + 250, 145, 60);
  ellipse(x + 285, 155, 60);
  ellipse(x + 320, 145, 60);
  ellipse(x + 285, 125, 60);
  // sinistra
  ellipse(x + 70, 105, 60);
  ellipse(x + 35, 85, 60);
  ellipse(x, 105, 60);
  ellipse(x + 35, 115, 60);
}

// funzione per disegnare il sole animato
function drawSun(x, y) {
  push();
  translate(x, y);
  /* frameCount mi aiuta a far aumentare l'angolo nel tempo
  in modo da avere una rotazione continua */
  let rotazione = frameCount * 0.05;
  /* genera un valore che permette un'oscillazione 
  - tramutato nel tempo fa si che il mio sole pulsi */
  let scala = 1 + 0.05 * sin(frameCount * 0.1);
  rotate(rotazione);
  scale(scala);
  noStroke();
  fill("orange");
  ellipse(0, 0, 50);
  fill("yellow");
  ellipse(0, 0, 25);
  pop();
}
