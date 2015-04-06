var iconX, iconY, mouseX, mouseY, degreesAngle, position;
$(function () {
    position = $("#brand").offset();	
    iconY = position.top+45;
    iconX = position.left+45;
	console.log(iconY);
	$('.mark').css('position', iconX + 'px ' + iconY + 'px');  
});

$(window).scroll(function () {
	position = $("#brand").offset();
	iconY = position.top+45;
	iconX = position.left+45;
	console.log(iconY);
	$('.mark').css('position', iconX + 'px ' + iconY + 'px');  
});
	
$( "#wrap" ).mousemove(function( event ) {
});

$( document ).on( "mousemove", function( event ) {
 	mouseY = event.screenY;
	mouseX  = event.screenX; 
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


