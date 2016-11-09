var data={};


$(document).ready(function(){


	// Mouse Enter Overlay
	$('ul#gallery li').on('mouseenter', function(){
		// Get data Attribute values
		var title=$(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if (desc == null) {
			desc = 'Click to Enlarge';
		}

		if (title == null) {
			title='';
		}

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>' +title+ '</h3><p>' +desc+ '</p>');

		// Fade in Overlay
		overlay.fadeIn(1000);
	});

	// Mouseleave overlay
	$('ul#gallery li').on('mouseleave', function(){

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');
		
		// Fade out overlay
		overlay.fadeOut(1000);
	});	

	// Global Variable
	
	var wrap = document.querySelector('#wrap');
	

		
});


// Get DAte Function

// function getDate(){
// 	var date="";
//     var d=new Date();
//     d=d.toString();
//     for (var i = 0; i < 24; i++) {
//            date=date+d[i];
//     }
//     console.log(date);


// 	return date;
// }