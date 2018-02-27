var imageObject = document.getElementById('image');

imageObject.crossOrigin = "Anonymous";
function toGrayscale(imageObject) {

	var canvas = document.createElement("canvas");

	var  ctx = canvas.getContext("2d");
	var width = imageObject.width;
	var height = imageObject.height;
	canvas.width = width;
	canvas.height = height;

	ctx.drawImage(imageObject,0,0);

	var imagePixels = ctx.getImageData(0,0,width,height);

	for(var i=0; i<imagePixels.height;i++){
		var x;
		for(var j=0; j<imagePixels.width;j++){
			var avg = (imagePixels.data[x] + imagePixels.data[ x + 1] + imagePixels.data[x + 2]) / 3;
			 
			imagePixels.data[x]= avg;

			imagePixels.data[x+1] = avg;
			imagePixels[x+2]= avg;
		}
	}
ctx.putImageData(imagePixels,0,0,0,0 ,imagePixels.width, imagePixels.height);
return canvas.toDataURL();

}

function change(){

	imageObject.src = toGrayscale(imageObject);
}
function restore(){

	imageObject.src = "img/p1.png";

	
}