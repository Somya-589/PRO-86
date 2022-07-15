var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var blockIMG="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(I_M_G){
        blockIMG = I_M_G;
        blockIMG.scaleToWidth(900);
        blockIMG.scaleToHeight(600);
        blockIMG.set({
            top:0,
            left:0
        });
        canvas.add(blockIMG);
    });
	
};

function playSound(){
	x.play();
};
