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
	
	var descArtwork = "A series of three 3ft. by 4ft. oil paintings on plywood " +
		"that would open the eyes of viewers to better understand " +
		"the teenager's stories as to when suicidal ideation comes " +
		"to their mind.";
	
	if (window.location.href.split("#")[1] === "artworks") {
		$(".title-container>h3").html(descArtwork);
	}
	
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
	$("#link-artworks").click( function() {
		setToUnscensored();
		$(".title-container>h3").html(descArtwork);
	});
	
	$("#link-artist").click(function() {
		$(".title-container>h1").html("Rayne Mariano");
		$(".title-container>h3").html("the artist - " +
			"<span class='italicized'>kuno</span>");
		
		transitionMainContent();
	});
	
	var artworks=$("#artworks").children();
	$(artworks[0]).hover(
		function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg");
			$(this).fadeIn();
		}
		, function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "WebContent/img/IMG_0330.JPG");
			$(this).fadeIn();
		}
	);
	$(artworks[1]).hover(
		function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg");
			$(this).fadeIn();
		}
		, function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "WebContent/img/IMG_0331.JPG");
			$(this).fadeIn();
		}
	);
	$(artworks[2]).hover(
		function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg");
			$(this).fadeIn();
		}
		, function() {
			$(this).fadeOut();
			$("img:first", this).attr("src", "WebContent/img/IMG_0332.JPG");
			$(this).fadeIn();
		}
	);
});