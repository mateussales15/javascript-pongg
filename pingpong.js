let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(1000, 1000);
}

function draw (){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    Borda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
    //cria a raquete na pagina
    movimentaRaquete();
    //responsavel pelo movimento da raquete
    colideRaquete();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
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
//função responsável criar o retangulo que representa a raquete

function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//função responsavel por movimentar a raquete
function movimentaRaquete() {

    if(keyIsDown(UP_ARROW)){
        yRaquete -=10;
    }
    if(KeyIsDown(DOWN_ARROW)){
        yRaquete +=10;
        }

    }
    //função responsável por quando a bolinha bater na raquete, retornar em dirção cpntrária.
    function colideRaquete(){

        if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){

            xvelocidadeBolinha *= -1;
             }

        }
    
        
    

