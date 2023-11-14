canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
array = ["sky_canvas.jpg","sky2.jpg", "sky3.jpg", "sky4.jpg", "sky1.jpg"];
random = Math.floor(Math.random()*5);
console.log(random);

pigeon_width = 100;
pigeon_height = 90;
background_image = array[random];
console.log("Background Image = " + background_image);
pigeon_image = "pigeon.png";

pigeon_x = 100;
pigeon_y = 150;

function add()
{
 background_imgTag = new Image();
 background_imgTag.onload = uploadbackground;
 background_imgTag.src = background_image;

 pigeon_imgTag = new Image();
 pigeon_imgTag.onload = uploadpigeon;
 pigeon_imgTag.src = pigeon_image;
}

function uploadbackground()
{
 ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadpigeon()
{
 ctx.drawImage(pigeon_imgTag, pigeon_x, pigeon_y, pigeon_width, pigeon_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '40')
    {
        down();
        console.log("down");
    }

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(pigeon_y>=10)
    {
        pigeon_y = pigeon_y - 10;
        console.log("When ↑ key is pressed x = " + pigeon_x + "y = " + pigeon_y);
        uploadbackground();
        uploadpigeon();
    }
}

function down()
{
    if(pigeon_y<=500)
    {
        pigeon_y = pigeon_y + 10;
        console.log("When ↓ key is pressed x = " + pigeon_x + "y = " + pigeon_y);
        uploadbackground();
        uploadpigeon();
    }
}

function left()
{
    if(pigeon_x>=0)
    {
        pigeon_x = pigeon_x - 10;
        console.log("When ← key is pressed x = " + pigeon_x + "y = " + pigeon_y);
        uploadbackground();
        uploadpigeon();
    }
}

function right()
{
    if(pigeon_x<=710)
    {
        pigeon_x = pigeon_x + 10;
        console.log("When → key is pressed x = " + pigeon_x + "y = " + pigeon_y);
        uploadbackground();
        uploadpigeon();
    }
}