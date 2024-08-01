//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let raioBolinha = tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//criar raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaraquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaraquete);
    movimentaRaquete();
    colideRaquete();
    //chamando a borda
    Borda();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
    fill("red");
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

function criaRaquete(xRaquete, yRaquete, alturaraquete, larguraRaquete){
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaraquete);
}
//funçao responsavel por criar o retangulo que representa a raquete
function criaRaquete (xRaquete, yRaquete, larguraRaquete, alturaraquete){
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaraquete);
}
//função responsavel por movimentar a raquete
function movimentaRaquete (){

    if(keyIsDown(UP_ARROW)){
        yRaquete -=10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete +=10;
    }
}
//função responsavel por quando a bolinha bater na raquete, retornar em direção contraria.
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaraquete && yBolinha + raioBolinha > yRaquete){
        xvelocidadeBolinha *=-1;

    }
}