import Object from './object.js';

export default class snail extends Object{
    constructor(startheight,playerheight,width,speed,snailnumber)
    {
        super(startheight,playerheight,width,speed);

        this.img = new Image();
        this.img.src = "schnecke.png";
        this.number = snailnumber;

        console.log("schnecke erstellt mit y startpos: " + this.y +
        "img src: " + this.img.src + " nr: " +
        this.number);
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

};



