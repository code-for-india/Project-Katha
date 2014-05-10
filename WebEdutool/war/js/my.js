function checkStatus(passState) {
	if (passState == "start") {
		$("#gamescreen").css("background-image", "url(images/1776.png)");
		$("#gamescreen").css("display", "block");

	}

}
$(document).ready(function() {

	var gameState = "start";
	checkStatus(gameState);

	$("#playButton").click(function() {
		$(".gameScr").css("display", "none");
		$("#plot1").css("display", "block");

	});

	$("#next1").click(function() {
		
		$(".gameScr").css("display", "none");

		$("#plot2").css("display", "block");

	});
	
	$("#next2").click(function() {
		
		$(".gameScr").css("display", "none");

		$("#plot3").css("display", "block");

	});

});