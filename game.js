import Snail from './snail.js';


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x =0;
var y = 0;
var playercount ;
var playerwidth =150;
var playerheight = 150;
var playerlist = [];
var playergap = 20;
var running = false;
var playery = 0;
var w_width=window.innerWidth-100;
var w_height=window.innerHeight-300;
initGame();
/*
fehler beim importeieren.
ich habe kleinbuchstaben genommen,deswegen hat er es irgendwie nicht gerafft
und er hat es trotzdem auch nicht gerraft, erst nach
hinzufügen der funktionen mit addeventlistener gingen button
funktionen
blabla änmderunmg

Kardinalität ist bei ERD
und Multiplizitäten bei UML

*/

function initEventHandlers()
{
    let btn = document.getElementById("reset");  
    btn.onclick =updateOptions;
    btn = document.getElementById("start");
    btn.onclick = toggleRunning;
}

initEventHandlers();



function updateOptions()
{
    playercount = document.getElementById("spieleranzahl").value;
    //playerwidth = w_height / playercount;
    console.log("playerwidht: " + playerwidth + " PLayers: " + playercount);
    initPlayers(playercount);
    initPlayer();

}

function initPlayers(playercount)
{
    playerlist = [];

    playery = 10;

    for(var i = 0 ; i < playercount; i++)
    {
        //alert(typeof(rnd(1,10)));
        let pl = new Snail(playery,playerheight,playerwidth,rnd(5,10),(i+1));
        playerlist.push(pl);
        playery+=playergap+playerheight;
        
      //  logall("übergebenes playery: ", playery, "gap: ",playergap, "height: " , playerheight);
    }


}

function logall(...logs)
{
    logs.forEach(element => {
        console.log(element);
    });
}

function drawAllPlayer()
{

    for(var i = 0 ; i < playerlist.length;i++)
    {
        //playerlist[i].move();
        playerlist[i].draw(ctx);

    }
}

function toggleRunning()
{
    running = !running;
}

function updatePlayers()
{

    if(!running)return;

    for(var i = 0 ; i < playerlist.length;i++)
    {
        playerlist[i].move();

    }
}

function initGame()
{
    initCanvas();
    initPlayer();
}

function initCanvas()
{
 canvas.width = w_width;
 canvas.height = w_height;
 
}

function initPlayer()
{
    var w = parseInt(document.getElementById("groesse").value);
    playerwidth = w;
    playerheight = w;
}



function update()
{
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,w_width,w_height);
    updatePlayers();
    drawAllPlayer();

}

function run ()
{
    setInterval(update, 50);
    console.log("kljhsdf");
}


function rnd(max,min)
{
    max = Math.floor(max);
    min = Math.floor(min);
    let rnd =( Math.random() * (max-min) + min);
    return Math.ceil(rnd);
}



run();

/*function initEventHandlers()
{
    let btn = document.getElementById("reset");  
    btn.onclick =test;
}

initEventHandlers();
*/