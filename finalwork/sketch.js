// 最終課題を制作しよう


// キャンバスのサイズと背景色を設定
function setup(){
  createCanvas(400, 400);
  background(255);
  b = random(100, 175)
  stroke(b, b-30, b+50);
  strokeWeight(3);{
  
  

  for (let j = 0; j < 9; j++){
    for (let k = 0; k<8; k++){
      if (k % 2 === 0){
  triangle(j*50,k*50,j*50-25,k*50 +50, j*50+25,k*50+50)
      }else{
        triangle (j*50-25, k*50, j*50-50, k*50+50, j*50, k*50+50)
      } 
    }
}
}

noFill ()
strokeWeight(6)
for (let m = 0; m<12; m++){
  noFill ()
strokeWeight(6)
  let theta = TWO_PI * m / 12
ellipse (200 + 100*cos (theta), 200 - 100*sin (theta), 150,150)

fill (b, b-30, b+50)
ellipse (200 + 100*cos (theta), 200 - 100*sin (theta),25, 25)
}

strokeWeight(3)
fill (255, 255, 100)
ellipse (width/2, height/2, 20, 20)

}






