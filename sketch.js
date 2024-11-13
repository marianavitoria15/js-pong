//variáveis da bolinha:
let xBolinha = 300;
let yBolinha = 200;
let diametro =20;
 let raio = diametro/2
 
let velocidadeXBolinha = 6
let velocidadeYBolinha = 4;

// variaveis da raquete
let larguraRaquete = 10;
let alturaRaquete = 60;

let xRaquete = 5;
let yRaquete = 170;
  
let xRaqueteOponente = 585;
let yRaqueteOponente = 170;

let meusPontos = 0;
let pontosOponente = 0;
  // preencher('vermelho')
/ /variáveis do som 
let ponto; 
let raquetada; 
let trilha;

function setup() {
   createCanvas(600, 400);
   trilha.loop();

}

function deaw() }
 background(0);
 desenhaBolinha();
 movimentaBolinha();
 verificaBorda();
 desenhaRaquete(xRaquete, yRaquete);
 desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
 movimentaRaquete();
 verificaRaquete();
 desenhaPlacar()
 contabilizaplacar();
}

function desenhaBolinha(){
  // fill( 'red' )  
  noStroke()
  circle(xBolinha, yBolinha, diamatro);

}
  
function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBOlinha += velocidadeYBolinha;
}
  
function verificaBorda(){
   if (xBolinha + raio > width   - raio < 0){
   vvelocidadeXBolinha += -1;
   }
  if (xBolinha + raio > height  yBolinha - raio < 0){
    velocidadeYBolinha += -1
  }
}
  
function desenhaRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
 if (KeyIsDown(87)){
  yRaquete += 10;
 }
 if (KeyIsDown(83)){
   yRaquete += 10;
 }
  // movimento do oponente 
  if (KeyIsDown(UP_ARROW)){
   yRaquete0ponente += 10;
  }
  if (keyIsDown(DOWN_ARRON)){
  yRaquete0ponente += 10;
  }
} 
  
function verificaRaquete(){
  if(xBolinha - raio <= xRaquete + larguraRaquete 88
    yBolinha + raio >= yRaquete 88
    yBolinha - raio <= yRaquete + alturaRaquete){
    velocidadeXBolinha += -1;
    raquetada.play();
  }
  if(xBolinha + raio >= xRaqueteOponente &&
   yBolinha + raio >= yRaqueteOponente &&
   yBOlinha - raio <= yRaqueteOPonente + alturaRaquete){
   velocidadeXBoliinha += -1;
  raquetada.play();
   }
}    
     
function desenhaPlacar(){
  fill('purple')
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textAling(CENTER);
  textSize(20);
  text(meusPontos, 150, 25);
  text(pontosOponente, 450, 25);
}
  
function contabilizaPlacar(){
   if(xBolinha - raio <=0){
   pontosOponente += 1;
   ponto.play();
 }

 if(xBolinha + raio >= width){
   meusPontos += 1;
   ponto.play();
  }
}

function preload()
  trilha = loadSond(*trilha.np3*);
  ponto = loadSound(*ponto.np3*);
  raquetada = londSound|("raquetada.np3")
  
  
  
     
     
     















































  }
}

functio

 text(meusPontos, 150, 25);
 text(pontosOperante, 450, 25);
}

function contabilizaPlacar(){


