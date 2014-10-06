/*
 * Geology Book Lessons: Coal
 *
 * Copyright (c) 2009 Delaware Lehigh Heritage Coridor
 *
 * Author: Koray Girton <koray@savagebrown.com>
 * Version: 1
 */

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//						INTRO PAGE
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var rootDirectory = "http://localhost:8888/";
var bookDirectory = 'Coal/';
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

	capPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 14, 28, 44);

	setupPlayer(mediaDirectory + "intro.mp3", null, '00:59');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//							PAGE 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage1() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	specialPos = 0;

	capPoints = Array(null, 0, 19, 37, 53);
	audioPoints = Array(null, 0, 19, 37);
	specialPoints = Array(null, 0, 46, 47, 65);

	hotPoints = Array(
		Array('p1a1', 21, 37),
		Array('p1a2', 28, 37),
		Array('p1a3', 25, 37),

		Array('p1a3-pa', 30, 37),

		Array('p1a4', 39, null), // swamps 45
		Array('p1a5', 39, null), // river 46
		Array('p1a6', 39, null),
		Array('p1a7', 39, null),
		Array('p1a8', 39, null),
		Array('p1a9', 39, null), // peat 84
		// Array('p1a10', 39, 72),
		Array('p1a11', 39, null),
		Array('p1a12', 39, null),
		// Array('p1a13', 39, 72),
		Array('p1a14', 39, null),
		Array('p1a15', 39, null),
		Array('p1a16', 39, null), // peat 84
		Array('p1a17', 39, null)
	);

	setupPlayer(mediaDirectory + "page1.mp3", page1Actions, '01:11', 'mp3', true);

}

function page1Actions(curTime) {

	for (i = 1; i < specialPoints.length; i++) {

		if (((curTime >= specialPoints[i] && curTime < specialPoints[i+1]) ||
			(i == specialPoints.length-1 && curTime >= specialPoints[i])) && specialPos != i ) {

			specialPos = i;

			// Reset
			$('#p1a4').css({ color: '#333' });
			$('#p1a5').css({ color: '#333' });
			$('#p1a9').css({ color: '#333' });
			$('#p1a16').css({ color: '#333' });
			$('#p1a17').css({ color: '#333' });

			// Highlight Labels
			if (specialPos == 2) {
				$('#p1a4').css({ color: 'red' });
			}

			if (specialPos == 3) {
				// previous
				$('#p1a4').css({ color: 'red' });
				$('#p1a5').css({ color: 'red' });
			}

			if (specialPos == 4) {
				// previous
				$('#p1a4').css({ color: 'red' });
				$('#p1a5').css({ color: 'red' });

				$('#p1a9').css({ color: 'red' });
				$('#p1a16').css({ color: 'red' });
				$('#p1a17').css({ color: 'red' });
			}

		}
	}
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//							PAGE 2
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage2() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;

	capPoints = Array(null, 0, 13);
	audioPoints = Array(null, 0);
	hotPoints = Array(
		Array('p2a1', 6, 70),
		Array('p2a2', 8, 70),
		Array('p2a3', 26, 70)
	);

	setupPlayer(mediaDirectory + "page2.mp3", null, '00:33');

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//							PAGE 3
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage3() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	specialPos = 0;

	capPoints = Array(null, 0, 18, 47, 78, 114);
	audioPoints = Array(null, 0, 47, 114);
	specialPoints = Array(null, 0,	72,   // Peat: 60% Carbon
									85,   // Lignite: 70% Carbon
									89,   // Peat: 50 feet
									93,   // Lignite: 10 feet
									101,  // Bituminuous
									103,  // Bituminuous: 75 to 85% Carbon
									107,  // Lignite: 10 feet
									110,  // Bituminuous: 5 feet
									118,  // Coal
									124   // Coal: 92 to 98% Carbon
									);

	hotPoints = Array(

		Array('p3a2', 10, 47),
		Array('p3a3', 11, 47),
		Array('p3a4', 14, 47),
		Array('p3a5', 38, 47),
		Array('p3a6', 39, 47),
		Array('p3a1-0', 45, 47),

		// Arrows
		Array('p3a1-1', 15, 47),
		Array('p3a1-2', 16, 47),
		Array('p3a1-3', 17, 47),

		Array('p3a7', 50, 114),     // peat
		// Array('p3a8', 50, null), // heat and pressure
		Array('p3a9', 50, 114),  	// 60% carbon
		Array('p3a10', 50, 114), 	// Lignite
		Array('p3a11', 50, 114), 	// 70% carbon
		Array('p3a12', 50, 114), 	// 10 feet thick
		Array('p3a13', 50, 114), 	// 50 feet thick
		//Array('p3a14', 50, null), // 10 feet thick
		Array('p3a15', 50, 114), 	// Bituminuous
		Array('p3a16', 50, 114), 	// 75 to 85% Carbon
		Array('p3a17', 50, 114), 	// 5 feet

		Array('p3a18', 50, null),	// Anthrocite
		Array('p3a19', 50, null),	// 92 to 97% Carbon
		Array('p3a20', 50, null) 	// 5 feet
	);

	setupPlayer(mediaDirectory + "page3.mp3", page3Actions, '02:12', 'mp3', true);

}

function page3Actions(curTime) {

	for (i = 1; i < specialPoints.length; i++) {

		if (((curTime >= specialPoints[i] && curTime < specialPoints[i+1]) ||
			(i == specialPoints.length-1 && curTime >= specialPoints[i])) && specialPos != i ) {

			specialPos = i;

			// Reset arrows
			$('#p3a1-4').css({ left: 300 });
			$('#p3a1-5').css({ left: 300 });
			$('#p3a1-6').css({ left: 300 });

			// Reset label colors
			$('#p3a7' ).css({ color: '#333' });
			$('#p3a9' ).css({ color: '#333' });
			$('#p3a10').css({ color: '#333' });
			$('#p3a11').css({ color: '#333' });
			$('#p3a12').css({ color: '#333' });
			$('#p3a13').css({ color: '#333' });
			$('#p3a14').css({ color: '#333' });
			$('#p3a15').css({ color: '#333' });
			$('#p3a16').css({ color: '#333' });
			$('#p3a17').css({ color: '#333' });
			$('#p3a18').css({ color: '#333' });
			$('#p3a19').css({ color: '#333' });
			$('#p3a20').css({ color: '#333' });

			// Reset Coal Size
			$('.coal6').css({
				width: 1,
				height: 1,
				left: 670,
				top: 295,
				opacity: '.1'
			});

			// Highlight Labels
			if (specialPos == 2) { $('#p3a9').css({ color: 'red' }); }  // Peat: 60% Carbon
			if (specialPos == 3) { $('#p3a11').css({ color: 'red' }); } // Lignite: 70% Carbon
			if (specialPos == 4) { $('#p3a13').css({ color: 'red' }); } // Peat: 50 feet
			if (specialPos == 5) { $('#p3a12').css({ color: 'red' }); } // Lignite: 10 feet
			if (specialPos == 6) { $('#p3a15').css({ color: 'red' }); } // Bituminuous
			if (specialPos == 7) { $('#p3a16').css({ color: 'red' }); } // Bituminuous: 75 to 85% Carbon
			if (specialPos == 8) { $('#p3a12').css({ color: 'red' }); } // Lignite: 10 feet
			if (specialPos == 9) { $('#p3a17').css({ color: 'red' }); } // Bituminuous: 5 feet

			if (specialPos == 10) {
				$('.coal6').animate({
					width: 452,
					height: 318,
				    left: 150,
					top: 125,
					opacity: '1'
				}, 1000);
			}

			if (specialPos == 11) {
				$('.coal6').css({
					width: 452,
					height: 318,
				    left: 150,
					top: 125,
					opacity: '1'
				});

				$('#p3a19').css({ color: 'red' }); } // Coal: 92 to 98% Carbon

		}
	}
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//							PAGE 4
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function runPage4() {

	capPos = 0;
	audioPos = 0;
	curPos = 0;
	specialPos = 0;

	capPoints = Array(null, 0, 27, 42, 74);
	audioPoints = Array(null, 0, 27, 42, 74);
	specialPoints = Array(null, 0,	19, // move arrows
									33, // move arrows
									86  // pointer
		);

	hotPoints = Array(
		Array('p4a7', 4, 27), 		// Time-dash

		Array('p4a10-1', 18, 27), 	// arrow-left
		Array('p4a10-2', 18, 27), 	// arrow-right

		Array('p4a1', 7, 27), 		// North America
		Array('p4a2', 8, 27), 		// Africa
		// Array('p4a3', 9, 27), 	// South America
		Array('p4a4', 10, 27), 		// Equator
		Array('p4a5', 23, 27), 		// Appalachian Mountains (pangea)
		Array('p4a6', 23, 27), 		// Appalachian Mountains (north america)

		Array('p4a9-1', 32, 41), 	// arrow-left
		Array('p4a9-2', 32, 41), 	// arrow-right

		Array('p4a11', 75, null), 	// Time-dash

		Array('p4a8', 81, null) 	// pointer

	);

	setupPlayer(mediaDirectory + "page4.mp3", page4Actions, '01:40', 'mp3', true);

}

function page4Actions(curTime) {

	for (i = 1; i < specialPoints.length; i++) {

		if (((curTime >= specialPoints[i] && curTime < specialPoints[i+1]) ||
			(i == specialPoints.length-1 && curTime >= specialPoints[i])) && specialPos != i ) {

			specialPos = i;

			// Reset
			$('#p4a10-1').css({ left: 520, top: 290 });
			$('#p4a10-2').css({ left: 560, top: 360 });

			$('#p4a8').css({ left: 552, top: 310 });

			$('#p4a9-1').css({ left: 160 });
			$('#p4a9-2').css({ left: 760 });
			$('#squeezeme').css({ width: 475 });

			// Animate
			if (specialPos == 2) {
				$('#p4a10-1').animate({
					left: 527,
					top: 291
				}, 1000);
				$('#p4a10-2').animate({
					left: 553,
					top: 350
				}, 1000);
			}

			if (specialPos == 3) {
				$('#p4a9-1').animate({
					left: parseInt($('#p4a9-1').css('left')) + 20
				}, 1500);

				$('#p4a9-2').animate({
					left: parseInt($('#p4a9-2').css('left')) - 20
				}, 1000);

				$('#squeezeme').animate({
					width: $('#squeezeme').width() - 20,
					left: parseInt($('#squeezeme').css('left')) + 10
				}, 1000);
			}

			if (specialPos == 4) {
				$('#p4a8').animate({
					top: 128,
					left: 388
				}, 3500);
			}


		}
	}
}
