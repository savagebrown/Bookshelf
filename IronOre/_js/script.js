/*
 * Geology Book Lessons: Iron Ore
 *
 * Copyright (c) 2009 Delaware Lehigh Heritage Coridor
 *
 * Author: Koray Girton <koray@savagebrown.com>
 * Version: 1
 */

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 						INTRO PAGE
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var rootDirectory = "http://localhost:8888/";
var bookDirectory = 'IronOre/';
var mediaDirectory = rootDirectory + bookDirectory + "_media/";

var capPos = 0;
var audioPos = 0;
var curPos = 0;

var capPoints = Array();
var audioPoints = Array();

function runPage0() {

	$('.slider').cycle({
		slideResize: 0,
		activePagerClass: 'current',
		fx: 'fade',
		timeout: 0,
		slideExpr: 'div',
		speed: 1000,
		before: function(curSlide, nextSlide, options, forwardFlag) {
			cc = $(nextSlide).index() + 1;
			$('#page-intro .page-text p').html($('.cc-'+cc).html());
		},
		pager: '.pager'
	});

	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 15, 39, 66);

	setupPlayer(mediaDirectory + "intro.mp3", null, '1:25');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage1() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 18, 41, 60, 81);
	audioPoints = Array(null, 0, 18, 39, 41, 58, 60, 81);

	setupPlayer(mediaDirectory + "page1.mp3", page1Functions, '1:42');

}

function page1Functions (curTime) {

	for (i = 1; i < audioPoints.length; i++) {

		if (((curTime >= audioPoints[i] && curTime < audioPoints[i+1]) ||
			(i == audioPoints.length-1 && curTime >= audioPoints[i])) && audioPos != i ) {

			audioPos = i;

			// STEP 1 -----------------------------------------------------------------

			if (audioPos == 1) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-2').hide();
				$('#page-1 .step-3').hide();
				$('#page-1 .step-4').hide();
				$('#page-1 .step-5').hide();

				// RUN TRANSITION
				$('#page-1 .step-1').show();

				// SWITCH CAPTION
				//$('#page-1 .page-text p').html($('#page-1 .cc-1').html());

			}

			// STEP 1 -> 2 ------------------------------------------------------------

			if (audioPos >= 2) {
				$('#page-1 .step-1').hide();
			}

			if (audioPos == 2) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-2').hide();
				$('#page-1 .step-3').hide();
				$('#page-1 .step-4').hide();
				$('#page-1 .step-5').hide();

				// SETUP CURRENT PAGE
				$('#page-1 .step-2').css({ width: 800, top: 150, left: 0 });

				// RUN TRANSITION
				$('#page-1 .step-1').fadeOut(500);
				$('#page-1 .step-2').fadeIn(1500);

				// SWITCH CAPTION
				//$('#page-1 .page-text p').html($('#page-1 .cc-2').html());

			}

			// STEP 2 -----------------------------------------------------------------

			if (audioPos == 3) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-2').hide();
				$('#page-1 .step-3').hide();
				$('#page-1 .step-4').hide();
				$('#page-1 .step-5').hide();

				// SETUP CURRENT PAGE
				$('#page-1 .step-2').css({ width: 800, top: 150, left: 0 });

				// RUN TRANSITION
				$('#page-1 .step-2').show();
				$('#page-1 .step-2').animate({ width: 600, top: 0, left: 0 }, 500);

			}

			// STEP 2 -> 3 -----------------------------------------------------------

			if (audioPos >= 4) {

				// SETUP OLD OBJECTS
				$('#page-1 .step-2').css({ width: 600, top: 0, left: 0 });
				$('#page-1 .step-2').show();

			}

			if (audioPos == 4) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-3').hide();
				$('#page-1 .step-4').hide();
				$('#page-1 .step-5').hide();

				// SETUP CURRENT PAGE
				$('#page-1 .step-3').css({ border: 2, borderStyle: 'solid', borderColor: 'black',
					height: 58, width: 150, left: 121, top: 25, zindex: 9999 });

				$('#page-1 .step-2').show();
				$('#page-1 .step-3 img').hide();

				// RUN TRANSITION
				$('#page-1 .step-3').fadeIn(750);
				$('#page-1 .step-3').animate({ width: 545, height: 212, top: 175, left: 150 }, 750, function () {
					$('#page-1 .step-3').css({ border: 'none' });
				});
				$('#page-1 .step-3 img').fadeIn(1500);

				// SWITCH CAPTION
				//$('#page-1 .page-text p').html($('#page-1 .cc-3').html());

			}

			// STEP 3 --------------------------------------------------------------

			if (audioPos == 5) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-4').hide();
				$('#page-1 .step-5').hide();

				// SETUP CURRENT PAGE
				$('#page-1 .step-2').css({ width: 600, top: 0, left: 0 });
				$('#page-1 .step-3').css({ width: 545, height: 212, top: 175, left: 150 });

				// RUN TRANSITION
				$('#page-1 .step-3').animate( {width: 300, top: 175, left: 50, height: 116 }, 750);

			}

			// STEP 3 -> 4 --------------------------------------------------------

			if (audioPos >= 6) {

				// SETUP OLD OBJECTS
				$('#page-1 .step-3').css({ width: 300, height: 116, top: 175, left: 50 });
				$('#page-1 .step-3 img').show();
				$('#page-1 .step-3').show();

			}

			if (audioPos == 6) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-1 .step-5').hide();

				// SETUP CURRENT PAGE
				$('#page-1 .step-4 img').hide();
				$('#page-1 .step-4').css({ left: 133, top: 175, width: 29, border: 2, borderStyle: 'solid', borderColor: 'black', zindex: 9999 });

				// RUN TRANSITION
				$('#page-1 .step-4').fadeIn(750);
				$('#page-1 .step-4').animate({ left: 470, top: 180, width: 200 }, 750, function () {
					$('#page-1 .step-4').css({ border: 'none' });
				});
				$('#page-1 .step-4 img').fadeIn(1500);

				// SWITCH CAPTION
				//$('#page-1 .page-text p').html($('#page-1 .cc-4').html());

			}

			// STEP 5 -------------------------------------------------------------

			if (audioPos >= 7) {

				// SETUP OLD OBJECTS
				$('#page-1 .step-4').css({ left: 470, top: 180, width: 200 });
				$('#page-1 .step-4').show();
				$('#page-1 .step-4 img').show();

			}

			if (audioPos == 7) {

				// SETUP CURRENT PAGE
				$('#page-1 .step-5 img').hide();
				$('#page-1 .step-5').css({ left: 606, top: 197, width: 10, border: 2, borderStyle: 'solid', borderColor: 'black', zindex: 9999 });

				// RUN TRANSITION
				$('#page-1 .step-5').fadeIn(750);
				$('#page-1 .step-5').animate({ left: 690, top: 50, width: 150 }, 750, function () {
					$('#page-1 .step-5').css({ border: 'none' });
				});
				$('#page-1 .step-5 img').fadeIn(1500);

				// SWITCH CAPTION
				//$('#page-1 .page-text p').html($('#page-1 .cc-5').html());
			}

		}

	}

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 2
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage2() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	audioPoints = Array(null, 1, 16, 21, 23, 25, 27, 28, 29, 33, 36, 37, 38, 52, 60, 61, 74);

	setupPlayer(mediaDirectory + "page2.mp3", page2Functions, '1:24');

}

function page2Functions (curTime) {

	for (i = 1; i < audioPoints.length; i++) {

		if (((curTime >= audioPoints[i] && curTime < audioPoints[i+1]) ||
			(i == audioPoints.length-1 && curTime >= audioPoints[i])) && audioPos != i ) {

			audioPos = i;

			// STEP 1 -----------------------------------------------------------------

			if (audioPos >= 1 && audioPos <= 6) {

				// HIDE ALL OTHER ELEMENTS
				$('#page-2 .step-2').hide();
				$('#page-2 .step-3').hide();
				$('#page-2 .step-4').hide();

				$('#page-2 .step-1 .laser-pointer').hide();

				$('#page-2 .step-1 .ic-1').hide();
				$('#page-2 .step-1 .ic-2').hide();
				$('#page-2 .step-1 .ic-3').hide();

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1').css({ left: 200, top: 125 });

				// RUN TRANSITIONS
				$('#page-2 .step-1').show();

			}

			if (audioPos == 1) {

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-1').html());

			}

			if (audioPos == 2) {

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-2').html());

			}

			if (audioPos == 3) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1 .laser-pointer').css({ top: 37 }).stop();
				$('#page-2 .step-1 .ic-1').hide();
				$('#page-2 .step-1 .ic-2').hide();
				$('#page-2 .step-1 .ic-3').hide();
				$('#page-2 .step-1 .laser-pointer .caption').html($('#page-2 .step-1 .ic-1').html());

				// RUN TRANSITIONS
				$('#page-2 .step-1 .laser-pointer').show();
				$('#page-2 .step-1 .laser-pointer').animate({ top: 85 }, 2000, function () {
					$('#page-2 .step-1 .ic-1').show();
				});

			}

			if (audioPos == 4) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1 .laser-pointer').css({ top: 85 }).stop().show();
				$('#page-2 .step-1 .ic-1').show();
				$('#page-2 .step-1 .ic-2').hide();
				$('#page-2 .step-1 .ic-3').hide();
				$('#page-2 .step-1 .laser-pointer .caption').html($('#page-2 .step-1 .ic-2').html());

				// RUN TRANSITIONS
				$('#page-2 .step-1 .laser-pointer').animate({ top: 135 }, 2000, function () {
					$('#page-2 .step-1 .ic-2').show();
				});

			}

			if (audioPos == 5) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1 .laser-pointer').css({ top: 135 }).stop().show();
				$('#page-2 .step-1 .ic-1').show();
				$('#page-2 .step-1 .ic-2').show();
				$('#page-2 .step-1 .ic-3').hide();
				$('#page-2 .step-1 .laser-pointer .caption').html($('#page-2 .step-1 .ic-3').html());

				// RUN TRANSITIONS
				$('#page-2 .step-1 .laser-pointer').animate({ top: 183 }, 2000, function () {
					$('#page-2 .step-1 .ic-3').show();
					setTimeout(function () {
						$('#page-2 .step-1 .laser-pointer').hide();
					}, 1000);
				});

			}

			if (audioPos == 6) {
				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1 .ic-1').show();
				$('#page-2 .step-1 .ic-2').show();
				$('#page-2 .step-1 .ic-3').show();

				$('#page-2 .step-1 .laser-pointer').hide();

				// RUN TRANSITIONS
				$('#page-2 .step-1').animate({ top: 0, left: 0 }, 1500);

			}

			if (audioPos >= 7) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-1').css({ top: 0, left: 0 });
				$('#page-2 .step-1 .ic-1').show();
				$('#page-2 .step-1 .ic-2').show();
				$('#page-2 .step-1 .ic-3').show();

			}

			// STEP 2 --------------------------------------------------------------------

			if (audioPos >= 7 && audioPos <= 10) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-3').hide();
				$('#page-2 .step-4').hide();

				$('#page-2 .step-2').css({ top: 245, left: 208 });

				// RUN TRANSITIONS
				$('#page-2 .step-2').fadeIn(750);
				$('#page-2 .step-2 .laser-pointer').hide();

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-3').html());

			}

			if (audioPos == 8) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-2 .laser-pointer').css({ top: 0, left: 158 }).stop().hide();
				$('#page-2 .step-2 .ic-1').hide();
				$('#page-2 .step-2 .ic-2').hide();

				// RUN TRANSITIONS
				$('#page-2 .step-2 .laser-pointer').fadeIn(750);
				$('#page-2 .step-2 .laser-pointer').animate({ top: 89, left: 145 }, 4000);
				$('#page-2 .step-2 .ic-1').show();

			}

			if (audioPos == 9) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-2 .laser-pointer').css({ top: 89, left: 145 }).stop().show();
				$('#page-2 .step-2 .ic-2').hide();

				// RUN TRANSITIONS
				$('#page-2 .step-2 .laser-pointer').animate({ top: 147, left: 112 }, 4000);
				$('#page-2 .step-2 .ic-2').show();

			}

			if (audioPos >= 10) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-2 .laser-pointer').hide();
				$('#page-2 .step-2 .ic-1').show();
				$('#page-2 .step-2 .ic-2').show();

			}

			if (audioPos == 11) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-2 .ic-1').show();
				$('#page-2 .step-2 .ic-2').show();

				// RUN TRANSITIONS
				$('#page-2 .step-2').animate({ top: 0, left: 430 }, 1500);

			}

			if (audioPos >= 12) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-2').css({ top: 0, left: 430 }).show();
				$('#page-2 .step-2 .ic-1').show();
				$('#page-2 .step-2 .ic-2').show();

				$('#page-2 .step-4').hide();

			}

			// STEP 3 --------------------------------------------------------------------

			if (audioPos >= 12 && audioPos <= 13) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-3').css({ top: 245, left: 208 });

				// DIV CONTAINER
				$('#page-2 .step-3 .img').hide().css({ height: 75, left: 75, top: 75, width: 75 }).show();

				// IMAGE
				$('#page-2 .step-3 img').hide().css({ left: -350, top: -256, width: 690 }).show();

				// RUN TRANSITIONS
				$('#page-2 .step-3').fadeIn(750);

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-4').html());

			}

			if (audioPos == 13) {

				// RUN TRANSITIONS
				$('#page-2 .step-3 .img').animate({ height: 156, left: 0, top: 34, width: 230 }, 4000);
				$('#page-2 .step-3 img').animate({ left: 0, top: 0, width: 230 }, 4000);

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-5').html());

			}

			if (audioPos == 14) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-3 .img').css({ height: 156, left: 0, top: 34, width: 230 });
				$('#page-2 .step-3 img').css({ left: 0, top: 0, width: 230 });

				// RUN TRANSITIONS
				$('#page-2 .step-3').animate({ left: 0 }, 1500);

			}

			if (audioPos >= 15) {
				$('#page-2 .step-3').css({ left: 0, top: 245 }).show();
			}

			if (audioPos == 15) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-4').hide();

				// RUN TRANSITIONS
				$('#page-2 .step-4').fadeIn(750);

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-6').html());

			}

			if (audioPos >= 16) {

				// SETUP INITIAL POSITIONS
				$('#page-2 .step-4').show();

				// SWITCH CAPTION
				$('#page-2 .page-text p').html($('#page-2 .cc-7').html());

			}
		}
	}
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 3
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage3() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	audioPoints = Array(null, 1, 12, 26);

	setupPlayer(mediaDirectory + "page3.mp3", page3Functions, '0:28');

	createstage('io-map-legend', 'io-map-stage', 'li', 'div', 500, 500);

}

function page3Functions(){

	for (i = 1; i < audioPoints.length; i++) {

		if (((curTime >= audioPoints[i] && curTime < audioPoints[i+1]) ||
			(i == audioPoints.length-1 && curTime >= audioPoints[i])) && audioPos != i ) {

			audioPos = i;

			if (audioPos == 1) {

				$('.page-text p').html($('#page-3 .cc-1').html());
				$('#io-map-magnetite').show();
				$('#io-map-county-names').show();
				$('#io-map-limonite').hide();
			}

			if (audioPos == 2) {

				$('.page-text p').html($('#page-3 .cc-2').html());
				$('#io-map-limonite').show();
				$('#io-map-county-names').show();
				$('#io-map-magnetite').hide();
			}

			if (audioPos == 3) {
				$('#io-map-limonite').show();
				$('#io-map-county-names').show();
				$('#io-map-magnetite').show();
			}
		}
	}
}
