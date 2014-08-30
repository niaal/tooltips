$(document).ready(function () {

	$('.tooltip-hover').on('mouseover', function() {
		$(this).siblings('.tooltip').fadeIn(100);
	});
	$('.tooltip-hover').on('mouseout', function() {
		$(this).siblings('.tooltip').fadeOut(100);
	});

});