var iconX, iconY, mouseX, mouseY, degreesAngle, position;

$(function () {
    position = $("#brand").offset();	
    iconY = position.top;
    iconX = position.left;

});

$(window).scroll(function () {
		position = $("#brand").offset();
		iconY = position.top;
		iconX = position.left;
		console.log(iconY);
    });	
$( "#wrap" ).mousemove(function( event ) {
});

$( document ).on( "mousemove", function( event ) {
 	mouseY = event.clientY;
	mouseX  = event.clientX; 
	degreesAngle = angleCalc(iconX, iconY, mouseX, mouseY);
	$("#brand").css("transform", 'rotate('+ degreesAngle + 'deg)');
});

function angleCalc(cirX, cirY, cursorX, cursorY){
	var deltaX = cursorX - cirX;
	var deltaY = cursorY - cirY;
	var theta = Math.atan2(-1*deltaY,deltaX);
	if (theta<0){
		theta = Math.abs(theta);		
	}
	else{
		theta= 2*Math.PI - theta
	}	
		theta = theta*(180/Math.PI);
	return theta;
}


