/*
 * Geology Book Lessons: Limestone
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
var bookDirectory = 'Limestone/';
var mediaDirectory = rootDirectory + bookDirectory + "_media/";

var capPos = 0;
var audioPos = 0;
var curPos = 0;
var specialPos = 0;

var capPoints = Array();
var audioPoints = Array();
var specialPoints = Array();

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

	capPoints = Array(null, 0, 12, 20, 40);

	setupPlayer(mediaDirectory + "intro.mp3", null, '00:58');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage1() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 35, 68);
	audioPoints = Array(null, 0, 2, 35, 68);
	hotPoints = Array(
		// Sea Bed -----------------------------------------
		Array('p1a1', 21, null),

			// Sea Bed Hotspots ----------------------------
			// Coral
			Array('p1a1-1', 42, 70),
			// Snails
			Array('p1a1-2', 43, 70),
			// Cephalopod
			Array('p1a1-3', 44, 70),
			// Trilobite
			Array('p1a1-4', 45, 70),

		// Coral Animal ------------------------------------
		Array('p1a2', 71, null),
			// Tenticle
			Array('p1a2-1', 72, null),
			// Mouth
			Array('p1a2-2', 72, null),
			// Stomach
			Array('p1a2-3', 72, null),
			// Limestone Cup-shell
			Array('p1a2-4', 72, null)
	);

	setupPlayer(mediaDirectory + "page1.m4v", null, '01:39', 'm4v');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 2
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage2() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 20, 40);
	audioPoints = Array(null, 0, 40);
	hotPoints = Array(
		// Marine Carbonate Reef Cross-Section
		Array("p2a1", 1, 40), // Continent
		Array("p2a2", 1, 40), // Continental Rock
		Array("p2a3", 1, 40), // Reef Shelf
		Array("p2a4", 30, 40), // Limestone
		// Array("p2a5", 35, 40), // Bolder Slide
		// Array("p2a6", 35, 40), // Bolder Slide
		// Array("p2a7", 15, 40), // Submarine Fan
		Array("p2a8", 24, 40), // Shallow Seas
		Array("p2a9", 15, 40), // Reef Slope
		// Marine Reef Prior to Mountain Building
		Array("p2a10", 40, 53), // Continent
		Array("p2a11", 40, 53), // Marine Limestone Reef
		Array("p2a12", 40, 53) // Shallow Seas
	);

	setupPlayer(mediaDirectory + "page2.mp3", null, '00:52');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 3
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage3() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 16);
	audioPoints = Array(null);
	hotPoints = Array(null);

	setupPlayer(mediaDirectory + "page3.m4v", null, '00:34', 'm4v');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 4
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage4() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	customPos = 0;

	capPoints = Array(null, 0, 20, 40, 50);
	audioPoints = Array(null, 0, 50);
	customPoints = Array(null, 0, 4, 5, 50);
	hotPoints = Array(null);

	setupPlayer(mediaDirectory + "page4.mp3", page4Actions, '00:59');

}

function page4Actions(curTime) {

	for (i = 1; i < customPoints.length; i++) {

		if (((curTime >= customPoints[i] && curTime < customPoints[i+1]) ||
			(i == customPoints.length-1 && curTime >= customPoints[i])) && customPos != i ) {

			console.log(curTime);

			customPos = i;

			if (customPos == 1) {
				$('#page-4 .step-2').hide();

				$('#page-4 .step-1 img').css({
					top: 100,
					left: 175,
				    width: 473
				});
			}

			if (customPos == 2) {
				$('#page-4 .step-1 img').animate({
					top: 55,
					left: 0,
				    width: 300
				}, 1000);
			}

			if (customPos >= 3) {
				$('#page-4 .step-1 img').css({
					top: 55,
					left: 0,
				    width: 300
				});
			}

			if (customPos != 3) {
				$('#small-map').css({ display: 'none' });
			}

			if (customPos == 3) {
				$('#small-map').css({ display: 'block' });
			}

			if (customPos < 4) {
				$('#page-4 .step-2').hide();
			}

			if (customPos == 4) {
				$('#page-4 .step-2').fadeIn('fast');
			}

		}

	}

}