var canvas;
var gameState = 0;
var playerCount;
var database;
var form;
var game;
var player;
var allPlayers;
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
    game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
}