jQuery(document).ready(function() {
	setTimeout(updateScrollSpy, 3000);
});
function updateScrollSpy() {
	jQuery('[data-spy="scroll"]').each(function() {
		var $spy = jQuery(this).scrollspy('refresh')
	});
}