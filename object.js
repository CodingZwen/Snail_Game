
export default class object
{
    constructor(startheight,playerheight,width,speed)
    {
        this.x=0;
        this.y=startheight;
        this.width =width;
        this.height=playerheight;
        this.speed = speed;

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
        console.log("spieler bewewgt sich: x" + this.x );
    }


    draw()
    {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
};

