/* Author: NICK VOLCHKO */

var customPos = 0;
var hotPos = 0;
var capPos = 0;
var audioPos = 0;
var curPos = 0;

var capPoints = Array();
var audioPoints = Array();
var customPoints = Array();
var hotPoints = Array();

var showNextButton = false;

var rootDirectory = "http://localhost:8888/";

$(function () {

	collectHotspots();

	$('.tab h1').click(function () {
		show = false;
		if (parseInt($(this).parent().css("zIndex")) != 9999) {
			showNextButton = $('#btn-next-page').is(':visible');
			$('#btn-next-page').hide();
			show = true;
		}

		if (showNextButton && !show) {
			$('#btn-next-page').show();
			showNextButton = false;
		}

		$('.tab').css({ zIndex: 0 });
		$(this).css({ zIndex: 0 });
		$('.tab').removeClass('tab-up');

		if (show) {
			$(this).parent().addClass('tab-up');
			$(this).parent().css({ zIndex: 9999 });
			$(this).css({ zIndex: 9999 });
		}
	});

	$('#scrollbar').tinyscrollbar({
		size: 450,
		sizethumb: 150
	});

	// SETUP SHARE BUTTONS
	$('.facebook a').attr({
		href: 'http://www.facebook.com/sharer/sharer.php?u='+window.location.href,
		target: '_blank'
	});

	$('.twitter a').attr({
		href: 'https://twitter.com/share?url='+window.location.href,
		target: '_blank'
	});

	$('#email-share-submit').click(function (e) {

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		toemail = $('#to-email').val();
		fromemail = $('#from-email').val();

		hasErrors = false;
		if (toemail == '') {
			$('#to-email').addClass('error');
			hasErrors = true;
		} else if (!emailReg.test(toemail)) {
			$('#to-email').addClass('error');
			hasErrors = true;
		}

		if (fromemail == '') {
			$('#from-email').addClass('error');
			hasErrors = true;
		} else if (!emailReg.test(fromemail)) {
			$('#from-email').addClass('error');
			hasErrors = true;
		}

		subject = $(document).attr('title');
		url = window.location.href

		if (!hasErrors) {
			$.ajax({
				type: 'POST',
				url: '/share-email.php',
				data: "from="+fromemail+"&to="+toemail+"&message="+escape($('#email-message').val())+"&subject="+escape(subject)+"&url="+url,
				success: function (returnData) {
					$('#form-sent-success').show();
					$('#email-share-submit').hide();

					setTimeout(function() {
						$('#share-email').hide();
						$('#form-sent-success').hide();
						$('#email-share-submit').show();
					}, 6000);
				}
			});
		}

		return false;
	});

});


function collectHotspots() {

	hs = $('#hotspots');

	$('.hotspots').each(function () {
		hs.append($(this));
	});

}


function changeCaptions(curTime) {

	// ----------------- C A P T I O N S -----------------
	for (i = 1; i < capPoints.length; i++) {

		if (((curTime >= capPoints[i] && curTime < capPoints[i+1]) ||
			(i == capPoints.length-1 && curTime >= capPoints[i])) && capPos != i ) {

			capPos = i;

			if ($('.page.current').attr('id') == "page-intro") {
				$('.pager a').eq(capPos-1).click();
			} else {
				$('.page.current .page-text p').html($('.page.current .cc-'+capPos).html());
			}

		}

	}

}


function imageActions(curTime) {

	// ----------------- A C T I O N S -----------------
	for (i = 1; i < audioPoints.length; i++) {

		if (((curTime >= audioPoints[i] && curTime < audioPoints[i+1]) ||
			(i == audioPoints.length-1 && curTime >= audioPoints[i])) && audioPos != i ) {

			audioPos = i;

			hideAll('.page.current', audioPos);

		}

	}

}

function hotPointActions(curTime) {

	zIn = parseInt($('.page.current').css('zIndex'));

	// ---------------- H O T S P O T S ----------------
	for (i = 0; i < hotPoints.length; i++) {

		if (curTime >= hotPoints[i][1] && (curTime < hotPoints[i][2] || hotPoints[i][2] == null)) {
			// NOT VISIBILE, SHOW!, otherwise ignore
			if (!$('#'+hotPoints[i][0]).is(":visible")) {
				$('#'+hotPoints[i][0]).css({ zIndex: zIn+(i+1) }).fadeIn('fast');
			}
		} else {
			// VISIBLE -> HIDE!, otherwise ignore because it's already hidden.
			if ($('#'+hotPoints[i][0]).is(":visible")) {
				$('#'+hotPoints[i][0]).hide();
			}
		}

	}

}


function hideAll(pageId, exceptThis) {

	$(pageId + ' .page-steps').children('div').each(function (i) {

		if ((i+1) == exceptThis) {
			$(this).show();
		} else {
			$(this).hide();
		}

	});

}

// Compile Closed Caption text onto one page.
function compileCC() {

	newDiv = "";

	$('.page').each(function () {

		if ($(this).attr('id') != 'page-credits' && $(this).attr('id') != 'page-glossary') {

			title = $(this).find('.page-text h1').html();

			newDiv += '<div class="cc-group">';

			newDiv += '<h1>'+title+'</h1>';

			$(this).find('.cc').each(function () {
				newDiv += '<p>'+$(this).html()+'</p>';
			});

			newDiv += '</div>';
		}
	});

	newDiv = '<div id="closed-caption" class="tinyScrollbar">'+newDiv+'</div>';

	$('#cc-compiled').append($(newDiv));

	$('#closed-caption').tinyscrollbar({
		size: 450,
		sizethumb: 150
	});
}

// Setup player for all media
// filename = absolute path of audio or video
// callback = function to run captions/actions
// runBoth = run image actions along with additional actions
function setupPlayer(filename, callback, duration, type, runBoth) {

	$('#btn-next-page').hide();

	if (type == null)
		type = 'mp3';

	$('.page-audio').css({ zIndex: $('.page.current').css('zIndex') });

	$('#jquery_jplayer_1').jPlayer('destroy');
	$('#jquery_jplayer_1').unbind($.jPlayer.event.timeupdate);
	$('#jquery_jplayer_1').unbind($.jPlayer.event.ended);

	$('#jquery_jplayer_1').jPlayer({

		ready: function () {
			if (type == 'mp3') {
				$(this).jPlayer("setMedia", {
					mp3: filename
				}).jPlayer('load');
			} else if (type == 'm4v') {
				$('#loading').show();

				$(this).jPlayer('setMedia', {
					m4v: filename,
					poster: filename+'.png'
				}).jPlayer('load');

				$('.page-audio').css({ zIndex: $('.page.current').css('zIndex') });
			}
		},
		swfPath: "http://www.delawareandlehigh.org/talesofthetowpath/Bookshelf/Shared/Stylesheets/blue.monday",
		solution: "flash, html",
		supplied: type, //"m4v",
		wmode: "transparent",
		size: {
			width: "850px",
			height: "500px"
		},
		backgroundColor: '#FFFFFF',
		preload: 'auto'

	}).bind($.jPlayer.event.timeupdate, function(event) {

		curTime = Math.round(event.jPlayer.status.currentTime);

		if (curTime != curPos) {

			curPos = curTime;

			if (typeof(callback) === 'function') {
				callback(curTime); // RUN USER DEFINED CAPTION CHANGES
				if (runBoth)
					imageActions(curTime);
			} else {
				imageActions(curTime); // RUN DEFAULT PAGE ACTIONS
			}

			changeCaptions(curTime); // RUN CHANGE CAPTIONS
			hotPointActions(curTime); // RUN HOT POINTS
		}

	}).bind($.jPlayer.event.ended, function(event) {
		if ($('.page.current').index() < ($('.page').length-1)) {
			$('#btn-next-page').show();
		}
	}).bind($.jPlayer.event.play, function(event) {
		$('#btn-next-page').hide();
	}).bind($.jPlayer.event.progress, function(event) {
		$('#loading').hide();
	});

	$('.duration').html(duration);

}



$(function () {

	createstage('map-legend', 'map-stage', 'li', 'div', 500, 500);

	checkNavButtons(0);

	$('#btn-next-page').click(function () {
		slidePageLeft();
		$('#btn-next-page').hide();
	});


	// Setup map show button.
	$('#map-toggle').click(function () {
		if (parseInt($('#map-page').css('zIndex')) == 9999)
			z = 0;
		else
			z = 9999;

		$('#map-page').css({
			zIndex: z
		});
	});

	setPages(0, true);

	function setPages(startingPage, init) {

		checkNavButtons(startingPage);

		if (startingPage == null) startingPage = 0;

		oldCurrent = $('.page.current').index();

		if (oldCurrent < startingPage)
			direction = true;
		else
			direction = false;

		$('.page').removeClass('current');
		$('.page-thumb a').removeClass('current');

		var pageCount = 0;

		$('.page').each(function () {
			pageCount = movePages($(this), direction, init, startingPage, pageCount);
		});
	}

	function movePages(page, direction, init, startingPage, pageCount) {

		var i = page.index();

		if (init)
			page.find('.page-controls').html($('.page-controls.main').html());

		if (i == startingPage) {

			page.addClass('current');
			page.show().animate({ left: 5, height: 680, top: 5 }, 1000);

			if (startingPage < ($('.page').length-1) && !page.hasClass('audio'))
				$('#btn-next-page').show();
			else
				$('#btn-next-page').hide();

			if (page.hasClass('audio')) {
				$('.page-audio').show();
			} else {
				$('.page-audio').hide();
			}

			if (i > 0) { // Ignore credits page.
				if (typeof(window['runPage'+(i-1)]) === "function") {
					window['runPage'+(i-1)]();
				}
			}

			page.find('.page-thumb').eq(i).find('a').addClass('current');

		}

		if (i > startingPage && pageCount < 2) {

			pageCount += 1;

			page.show().animate({
				left: 5 + (5*pageCount),
				top: 5 + (5*pageCount),
				height: 680 - (10*pageCount)
			}, 1000);

		} else if (i > startingPage) {

			if (direction) {
				page.css({ left: 15, height: 660, top: 15 }).hide();
			} else {
				page.show().animate( { left: 15, height: 660, top: 15 }, 1000, function () {
					page.hide();
				});
			}

		} else if (i < startingPage) {
			page.animate({ left: -parseInt(page.css('width')) }, 1000);
		}

		$('.tab').css({ zIndex: 0 });
		$('.hotspots').children().hide();

		return pageCount;
	}

	$('.go-right').click(function () {
		slidePageLeft();
	});

	$('.go-left').click(function () {
		slidePageRight();
	});

	compileCC();
	$('.show-cc').click(function () {
		$('#cc-compiled-wrapper').toggle();
	});

	$('.email').click(function() {
		$('#share-email').toggle();
	});

	$('.page-thumb').each(function(i) {
		$(this).find('a').click(function () {
			setPages(i % $('.page').length, false);
		});
	});


	function slidePageLeft() {
		slidePage(true, -1);
	}

	function slidePageRight() {
		slidePage(false, -1);
	}

	// Direction true = next page, false = prev page
	// Page #
	function slidePage(direction, pageNumber) {

		for ( i = 0; i < $('.page').length; i++ ) {
			if ($('.page').eq(i).hasClass('current')) {
				currentId = i;
				break;
			}
		}

		if (pageNumber == -1 && direction) { // getNextPageIndex
			pageNumber = currentId + 1;
			if (pageNumber >= $('.page').length)
				return;

		} else if (pageNumber == -1 && !direction) { // getPreviousPageIndex
			pageNumber = currentId - 1;
			if (pageNumber < 0)
				return;

		}

		setPages(pageNumber, false);
	}

	function checkNavButtons(pageNumber) {

		$('.go-right').removeClass('inactive');
		$('.go-left').removeClass('inactive');

		if (pageNumber >= $('.page').length-1) {
			$('.go-right').addClass('inactive');
		}

		if (pageNumber <= 0) {
			$('.go-left').addClass('inactive');
		}

	}

	$('#standards').tinyscrollbar({
		size: 450,
		sizethumb: 150
	});

});

function createstage(legendGroupId, stageGroupId, legendObject, stageObject, hideSpeed, showSpeed) {

	var legendGroupId = typeof(legendGroupId) != 'undefined' ? legendGroupId : 'map-legend';
	var stageGroupId = typeof(stageGroupId) != 'undefined' ? stageGroupId : 'map-stage';
	var legendObject = typeof(legendObject) != 'undefined' ? legendObject : 'li';
	var stageObject = typeof(stageObject) != 'undefined' ? stageObject : 'div';
	var hideSpeed = typeof(hideSpeed) != 'undefined' ? hideSpeed : 500;
	var showSpeed = typeof(showSpeed) != 'undefined' ? showSpeed : 500;

	var legendObjects = '#'+legendGroupId+' '+legendObject;
	var stageObjects = '#'+stageGroupId+' '+stageObject;

	$(stageObjects).hide();

	$(legendObjects).each(function () {
		$(this).unbind('click');
	});

	$(legendObjects).each(function(i) {

		$(this).click(function () {

			if ($(this).hasClass('active'))
			{
				$(this).removeClass('active');
				stageClass = $(this).attr('class');

				$(stageObjects+'.'+stageClass).hide(hideSpeed);
			} else {
				stageClass = $(this).attr('class');
				$(this).addClass('active');

				$(stageObjects+'.'+stageClass).show(showSpeed);
			}

		});
	});

}