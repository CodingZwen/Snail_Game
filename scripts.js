
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


//hindernisse mit spurwechsel

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
        let pl = new player(playery,playerheight,(i+1));
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


run();



class player{
    constructor(startheight,playerheight,snailnumber)
    {
        this.x=0;
        this.y=startheight;
        this.width =50;
        this.height=playerheight;
        this.speed = rnd(1,10);
        this.img = new Image();
        this.img.src = "schnecke.png";
        this.number = snailnumber;

        console.log("spieler erstellt mit y startpos: " + this.y);
    }

    reset()
    {
        this.x=0;
        this.y=0;
    }

    setpos(x,y)
    {
        this.x=x;
        this.y=y;
    }


    move()
    {
        this.x += this.speed;
        console.log("spieler bewewgt sich: x" + x );
        if(this.x > 1600)this.x=0;
    }

    draw(ctx)
    {
       // ctx.fillStyle = "rgb(255,2,0)";
       // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        this.drawText(ctx);
    }

    drawText(ctx)
    {
        ctx.font = "9px Arial";
        ctx.fillStyle ="#ffffff";
        ctx.fillText("Schnecke Nr: "+ this.number,this.x,this.y);
    }

}


function rnd(max,min)
{
    max = Math.floor(max);
    min = Math.floor(min);
    let rnd =( Math.random() * (max-min) + min);
    return Math.ceil(rnd);
}

