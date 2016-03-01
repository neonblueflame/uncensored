$(document).ready(function() {
	var mainTitle = $("#title-container>h1").html();
	var mainSubTitle = $("#title-container>h3").html();
	
	var setToUnscensored = function() {		
		$("#title-container>h1").html(mainTitle);
		$("#title-container>h3").html(mainSubTitle);

		/* -- Scroll code
		var articleID = this.id.replace("link-", "");
		$("section#main-content").animate({
			scrollTop: $("#" + articleID).offset().top
		}, "slow");
		//*/
	};
	
	$("#link-home").click(setToUnscensored);
	$("#link-artworks").click(setToUnscensored);
	
	$("#link-artist").click(function() {
		$("#title-container>h1").html("Rayne Mariano");
		$("#title-container>h3").html("the artist - " +
			"<span class='italicized'>kuno</span>");
	});
});