//Twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id = id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}(document, 'script', 'twitter-wjs');
}

$(document).ready(function() {
	//Smooth Scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
	if (href != undefined && href != "#") {
		$root.animate({
			scrollTop: $(href).offset().top
			}, 500, function () {
			window.location.hash = href;
			});
			return false;
	}

	});


	//Steller
    	$('#FAQCont').stellar();


    //Tooltips
    	$(function() {
    	$('[data-toggle="tooltip"]').tooltip();
	});


	//Form Buttons
    $('#button').on('click', function() {
      var comment = $('.message-box').val().toUpperCase();
      console.log(comment);

      if($('.message-box').val() === ""){
      	 	$('.message-box').css('border', '2px solid red');
      	 	$("#visible-comment").html(comment).append('Can you give me your input?');
      } else {
      	    $('#visible-comment').html(comment).append('<br>Hey Thanks for your feedback. I will respond asap!');
    		$('.form-control').hide();
    		$('#button').hide();
    		$('#char-count').hide();
      }

      return false;

    });



    //Input Boxes Background
    $(function () {
		$('#message').css({'background-color': '#cee6e6', 'color': '#000'});
		$('#name, #number, #email').css({'background-color': '#fff', 'color': '#000'});
	});


    //Textbox Character Count
	$('.message-box').on('keyup', function() {
		console.log('keyup happened');

		var textCount = 3;
		var text = 'string';

		var charCount = $('.message-box').val().length;
		console.log(charCount);

		$('#char-count').html(charCount);
		if(charCount > 50) {
			$('#char-count').css('color', 'red');
		} else {
			//$('#char-count').css('color', 'black');
		};
	});

	//Work Section
	for(var i = 0; i < works.length; ++i) {
		$("#works").append("\
			<div class='col-md-3 col-sm-6 col-xs-12 projectImages'>\
				<a href='" + works[i].url + "' target='_blank' class='work-img'>\
					<img class='img-responsive' src='" + works[i].pic + "'>\
					<span class='info'>" + works[i].title + "</span>\
				</a>\
			</div>\
		");

		var images = $('#works .projectImages');
			if (i%2 === 0) {
				$(images[i]).css("border", "2px solid #93c1c1");
			} else {
            	$(images[i]).css("border", "2px solid #E76824");
            };

    //Hovering effect project titles
    $(".work-img").mouseenter( function() {
    	$(".info", this).show();
    }).mouseleave(function(){
    	$(".info", this).hide();
	});


	};//End of Work Section

})//End of Doc Ready



//Map with Marker
var marker;

function initMap() {
        var leamington = {lat: 42.057450, lng: -82.599764};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: leamington
        });

        marker = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: {lat: 42.057450, lng: -82.599764}
		});

		marker.addListener('click', toggleBounce);

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

        //Info Window
        var contentString = '<div id="infoWindowContent">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Leamington</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Leamington</b>is a municipality in Essex County, Ontario, Canada.'+
            'With a population of 27,595, it is the second largest municipality in the Windsor-Essex County area'+
            '(after the separated municipality of Windsor, Ontario).'+
            'It includes <b>Point Pelee</b>, the southernmost point of mainland Canada.'+
            'Known as the "Tomato Capital of Canada",'+
            'it is the location of a tomato processing factory owned by Highbury-Canco,'+
            'previously owned until 2014 by the <b>H. J. Heinz Company.</b>'+
            'Due to its location in the southernmost part of Canada,'+
            'Leamington uses the motto "Sun Parlour of Canada".'+
            'In 2006, MoneySense Magazine ranked Leamington as the No. 1 best place to live in Canada.</p>'+
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Leamington,_Ontario" target="_blank">Wikipedia</a>'+
            '(last updated December 3, 2017).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 400
        });

        var marker = new google.maps.Marker({
          position: leamington,
          map: map,
          title: 'Leamington Town Hall'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });


      }
