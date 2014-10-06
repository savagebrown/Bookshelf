/*
 * Geology Book Lessons: Slate
 *
 * Copyright (c) 2009 Delaware Lehigh Heritage Coridor
 *
 * Author: Koray Girton <koray@savagebrown.com>
 * Version: 1
 */

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 						SLATE
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var rootDirectory = "http://localhost:8888/";
var bookDirectory = 'Slate/';
var mediaDirectory = rootDirectory + bookDirectory + "_media/";

var capPos = 0;
var audioPos = 0;
var curPos = 0;
var specialPos = 0;

var capPoints = Array();
var audioPoints = Array();
var specialPoints = Array();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 						INTRO PAGE
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

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

	capPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 22, 35, 47);
	hotPoints = null;

	setupPlayer(mediaDirectory + "intro.mp3", null, '01:03');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage1() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	specialPoints = 0;

	capPoints = Array(null, 0, 21, 38, 71);
	audioPoints = Array(null, 0, 38, 71);
	specialPoints = Array(null, 0, 26, 33, 42);

	hotPoints = Array(
		// 3D Ocean View ----------------------------------------------------------
		Array('p1a1', 11, 39),

			// Marine Reef
			Array('p1a1-1', 13, 38),
			// Volcanic Island Arc
			Array('p1a1-2', 24, 38),
			// Oceanic Crust
			Array('p1a1-3', 33, 38),
			// Mudclay
			Array('p1a1-4', 33, 38),
			// Continental Crust
			Array('p1a1-5', 33, 38),
			// Compression Arrows
			Array('p1a1-7', 25, 38),
			Array('p1a1-6', 32, 38),

		// Ocean Cross-section large ----------------------------------------------
		Array('p1a2', 40, 69),
			// Volcanic Arc Rock
			Array('p1a2-1', 39, 69),
			// Mudclay
			Array('p1a2-2', 39, 69),
			// Limestone Rock
			Array('p1a2-3', 39, 69),
			// Marine Basin
			Array('p1a2-4', 39, 69),
			// Compression Arrows
			Array('p1a2-5', 41, 69),
			Array('p1a2-6', 41, 69),

		// Ocean Cross-section small ---------------------------------------------
		Array('p1a3', 70, null),
			// Eroded Sediment
			Array('p1a3-1', 77, null),
			// Rivers & Streams
			Array('p1a3-2', 91, null),
			// Rain
			Array('p1a3-3', 71, null),
			// Eroding Mountains
			//Array('p1a3-4', 73, null),
			// Deposited Layers of Sediment
			Array('p1a3-5', 96, null)
	);

	setupPlayer(mediaDirectory + "page1.mp3", page1Actions, '01:37', 'mp3', true);

}

function page1Actions(curTime) {

	for (i = 1; i < specialPoints.length; i++) {

		if (((curTime >= specialPoints[i] && curTime < specialPoints[i+1]) ||
			(i == specialPoints.length-1 && curTime >= specialPoints[i])) && specialPos != i ) {

			specialPos = i;

			// Right arrow
			if (specialPos == 2) {

				p1a1_7 = $('#p1a1-7');
				p1a1_7.css({ left: 840 });
				// Animations
				p1a1_7.animate({
					left: parseInt(p1a1_7.css('left')) - 20
				}, 2000);

			}
			// Left arrow
			if (specialPos == 3) {

				p1a1_6 = $('#p1a1-6');
				p1a1_6.css({ left: 90 }); // Reset
				// Animations
				p1a1_6.animate({
					left: parseInt(p1a1_6.css('left')) + 20
				}, 1000);

			}

			// Arrows
			if (specialPos == 4) {

				p1a2_5 = $('#p1a2-5');
				p1a2_6 = $('#p1a2-6');
				p1a2_5.css({ left: 130 }); // Reset
				p1a2_6.css({ left: 800 }); // Reset
				// Animations
				p1a2_5.animate({
					left: parseInt(p1a2_5.css('left')) + 40
				}, 9000);
				// Animations
				p1a2_6.animate({
					left: parseInt(p1a2_6.css('left')) - 40
				}, 9000);

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

	capPoints = Array(null, 0, 26);
	audioPoints = Array(null, 0);
	hotPoints = Array(
		Array('p2a1', 3, null),

			// Eroding Mountains
			//Array('p2a1-1', 53, 53),
			// Shoreline
			//Array('p2a1-2', 53, 53),
			// Submarine Canyon
			Array('p2a1-3', 43, 53),
			// Deposited Layers of Mud & Clay
			Array('p2a1-4', 3, 53),
			// Submarine Sediment Fan
			Array('p2a1-5', 45, 53),
			// Continental Rise
			Array('p2a1-6', 24, 53),
			// Continental Slope
			Array('p2a1-7', 17, 53),
			// Continental Shelf
			Array('p2a1-8', 9, 53)
			// Rivers & Streams
			//Array('p2a1-9', 53, 53)
		);

	setupPlayer(mediaDirectory + "page2.mp3", null, '00:53');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 3
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage3() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	specialPoints = 0;

	capPoints = Array(null, 0, 23, 50, 74, 93, 105);
	audioPoints = Array(null, 0, 23, 50, 74, 93);
	specialPoints = Array(null, 0, 28, 100);
	hotPoints = Array(
		// Continental Shelf ----------------------------------------------------------
		Array('p3a1', 18, 23),

			// Trilobite
			Array('p3a1-1', 20, 23),
			// Crinoid
			Array('p3a1-2', 21, 23),
			// Brachiopod
			Array('p3a1-3', 19, 23),

		// 3D Ocean View ----------------------------------------------------------
		Array('p3a2', 21, 50),

			// Deposited Layers of Mud & Clay
			Array('p3a2-1', 23, 50),
			// Compression Arrow
			Array('p3a2-4', 27, 50),
			// Mudstone
			Array('p3a2-2', 33, 50),
			// Shale
			Array('p3a2-3', 34, 50),

		// 3D Ocean View ----------------------------------------------------------
		Array('p3a3', 21, 93),

			// Floating Graptolite Colonies
			Array('p3a3-1', 59, 74),
			// Graptolites
			Array('p3a3-2', 55, 74),

			// North America
			Array('p3a3-3', 79, 93),
			// Africa
			Array('p3a3-4', 80, 93),
			// Appalacian Moutnains
			Array('p3a3-5', 88, 93),

		// 3D Ocean View ----------------------------------------------------------
		Array('p3a4', 21, null),

			// Intense Folding of Shale Layers
			Array('p3a4-1', 99, null),
			// Commpression Arrows
			Array('p3a4-4', 98, 103),
			Array('p3a4-3', 98, 103),
			// Shale Metamorphosed into Slate
			Array('p3a4-2', 103, null),
			// Slate
			Array('p3a4-5', 103, null), // image
			// Foliation
			Array('p3a5-2', 115, null)

	);

	setupPlayer(mediaDirectory + "page3.mp3", page3Actions, '02:09', 'mp3', true);

}

function page3Actions(curTime) {

	for (i = 1; i < specialPoints.length; i++) {

		if (((curTime >= specialPoints[i] && curTime < specialPoints[i+1]) ||
			(i == specialPoints.length-1 && curTime >= specialPoints[i])) && specialPos != i ) {

			specialPos = i;

			if (specialPos == 2) {
				p3a2 = $('.page.current .step-2 img');
				p3a2_4 = $('#p3a2-4');
				p3a2.css({ height: 345 })
				p3a2_4.css({ top: 110 });
				p3a2.animate({
					height: parseInt(p3a2.css('height')) - 20,
					top: parseInt(p3a2.css('top')) + 20
				}, 2000);
				p3a2_4.fadeIn(500).animate({
					top: parseInt(p3a2_4.css('top')) + 20
				}, 2000);
			}

			if (specialPos == 3) {

				// VARIABLE DECLARATIONS

				p3a4_3 = $('#p3a4-3');
				p3a4_4 = $('#p3a4-4');
				step4 = $('.page.current .step-4 img');

				// RESET TO INITIAL POSITIONS

				p3a4_4.css({
					left: 680,
					top: 300
				});

				p3a4_3.css({
					left: 230,
					top: 300
				});

				step4.css({
					left: 250,
					width: 325
				});

				// DO ANIMATIONS

				p3a4_4.animate({
					left: parseInt(p3a4_4.css('left')) - 20
				}, 1500);

				p3a4_3.animate({
					left: parseInt(p3a4_3.css('left')) + 20
				}, 1000);

				step4.animate({
					width: step4.width() - 20,
					left: parseInt(step4.css('left')) + 10
				}, 1000);
			}

		}
	}
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 							PAGE 4
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage4() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 17);
	audioPoints = Array(null, 0);
	hotPoints = Array(
		Array('p4a1', 1, null),
		Array('p4a1-1', 2, 32),
		Array('p4a1-2', 2, 32),
		Array('p4a1-3', 2, 32),
		Array('p4a1-4', 2, 32),
		Array('p4a1-5', 2, 32),
		Array('p4a1-6', 6, 32)
	);
	setupPlayer(mediaDirectory + "page4.mp3", null, '00:31');

}