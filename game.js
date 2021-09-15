import Snail from './snail.js';


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x =0;
var y = 0;
initCanvas();
var width = canvas.width;
var height = canvas.height;
var playercount ;
var playerwidth ;
var playerheight = 50;
var playerlist = [];
var playergap = 20;
var running = false;
var playery = 0;


/*
fehler beim importeieren.
ich habe kleinbuchstaben genommen,deswegen hat er es irgendwie nicht gerafft
und er hat es trotzdem auch nicht gerraft, erst nach
hinzufügen der funktionen mit addeventlistener gingen button
funktionen
blabla änmderunmg
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
    playerwidth = height / playercount;
    console.log("playerwidht: " + playerwidth + " PLayers: " + playercount);

    initplayer(playercount);

}

function initplayer(playercount)
{
    playerlist = [];

    playery = 10;

    for(var i = 0 ; i < playercount; i++)
    {
        //alert(typeof(rnd(1,10)));
        let pl = new Snail(playery,playerheight,50,rnd(1,10),(i+1));
        playerlist.push(pl);
        playery+=playergap+playerheight;
    }


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


function initCanvas()
{
 canvas.width = 1620;
 canvas.height = 400;
}



function update()
{
    ctx.clearRect(0,0,width,height);
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