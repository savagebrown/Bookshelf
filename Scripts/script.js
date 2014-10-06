/* Author: NICK VOLCHKO */

$(function () {

	$('a').click(function() {
		window.location = $(this).attr('href');
		return false;
	});

});