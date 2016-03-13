$(document).ready(function() {
	// delegate calls to data-toggle="lightbox"
	//*
	$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
		event.preventDefault();
		return $(this).ekkoLightbox({
			onShown: function() {
				if (window.console) {
					return console.log('onShown event fired');
				}
			},
			onContentLoaded: function() {
				if (window.console) {
					return console.log('onContentLoaded event fired');
				}
			},
			onNavigate: function(direction, itemIndex) {
				if (window.console) {
					return console.log('Navigating '+direction+'. Current item: '+itemIndex);
				}
			}
		});
	});
	//*/
	
	var mainTitle = $(".title-container>h1").html();
	var mainSubTitle = $(".title-container>h3").html();
	
	var transitionMainContent = function() {
		$("section#main-content").fadeOut();
		$("section#main-content").fadeIn();
	}
	
	var setToUnscensored = function() {		
		$(".title-container>h1").html(mainTitle);
		$(".title-container>h3").html(mainSubTitle);
		
		transitionMainContent();
		
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
		$(".title-container>h1").html("Rayne Mariano");
		$(".title-container>h3").html("the artist - " +
			"<span class='italicized'>kuno</span>");
		
		transitionMainContent();
	});
});