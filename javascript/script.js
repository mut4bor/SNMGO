$(document).ready(function(){
	/* Всегда */
	$('.invisible').fadeOut();
	$('.drag').draggable();
	$('.cancel-p-n-p').fadeOut();
	
	/* Поиск */	
	
	$('#search-input').click(function (){
		$('#cancel-searchbox').animate({marginTop:'0%'});
		$('#cancel-searchbox').animate({opacity: '1'});
		$('h1').fadeOut();
		$('#menu').animate({marginTop:'1%'}, 390);
		$('#menuLinks').fadeOut();	
		$('#search-button').animate({opacity:'1'});
	});
	
	$('#search-button').click(function() {
		window.open('https://www.google.com/search?q='+ $('#search-input').val(),'_blank');
	});
	
	$(document).keyup (function(e) {
		if(e.keyCode == 13) {
			$('#search-button').click();
		}
	});
	
	/* cancel-searchbox */
	
	$('#cancel-searchbox').click(function (){
		$('#cancel-searchbox').animate({marginTop:'-10%'});
		$('#cancel-searchbox').animate({opacity: '0'});
		$('h1').fadeIn();
		$('#menu').animate({marginTop:'10%'}, 390);
		$('#menuLinks').fadeIn();	
		$('#search-button').animate({opacity:'0'});
		$('#search-input').val('');
	});
	
	$(document).keyup (function(e) {
		if(e.keyCode == 27) {
			$('#cancel-searchbox').click();
		}
	});
	
	/* Смена разделов */
	
	$('#change1').click(function() {
		$('#menuLinks1').fadeOut(280, function (){
		$('#menuLinks2').fadeIn();
		$('#menuLinks2').animate({opacity: '1'}, 1);
		$('#menuLinks1').animate({opacity: '0'}, 1);
		$('#menu h1').text('Music');
		});
	});
	
	$('#change2').click(function() {
		$('#menuLinks2').fadeOut(function (){
		$('#menuLinks3').fadeIn();
		$('#menuLinks3').animate({opacity: '1'}, 1);
		$('#menuLinks2').animate({opacity: '0'}, 1);
		$('#menu h1').text('Games');
		});
	});
	
	$('#change3').click(function() {
		$('#menuLinks3').fadeOut(function (){
		$('#menuLinks4').fadeIn();
		$('#menuLinks4').animate({opacity: '1'}, 1);
		$('#menuLinks3').animate({opacity: '0'}, 1);
		$('#menu h1').text('Other');
		});
	});
	
	$('#change4').click(function() {
		$('#menuLinks4').fadeOut(function (){
		$('#menuLinks1').fadeIn();
		$('#menuLinks1').animate({opacity: '1'}, 1);
		$('#menuLinks4').animate({opacity: '0'}, 1);
		$('#menu h1').text('Social Networks');
		});
	});
	
	$('#change5').click(function() {
		$('#menuLinks4').fadeOut(function (){
		$('#menuLinks1').fadeIn();
		$('#menuLinks1').animate({opacity: '1'}, 1);
		$('#menuLinks4').animate({opacity: '0'}, 1);
		$('#menu h1').text('Social Networks');
		});
	});
	
	/* Раздел Other */
	
	$('#feedback').click(function() {
		$('#menu h1').text('Feedback');
		$('#menuLinks4').html('<a href="https://vk.com/mut4bor" target="_blank" class="bg">VK</a><a href="https://www.youtube.com/channel/UCuXHJVISx6U6nyeDZYqDZSQ" target="_blank" class="bg">YouTube</a><a href="https://steamcommunity.com/id/mut4bor" target="_blank" class="bg">Steam</a><button id="change5" class="change"></button>');	
	});
	
	/* Раздел Music */
	
	$('#lofi').click(function(){
		$('#lofi2').animate({opacity: 0});
		$('#lofi').removeClass();
		$('#lofi_cancel').animate({opacity: 1}, 1);
		$('#lofi_cancel').fadeIn();
		$('#lofi_radio').animate({opacity: 1}, 1);
		$('#lofi_radio').fadeIn();
	});
	
	$('#lofi_cancel').click(function(){
		$('#lofi_cancel').fadeOut(function(){
			$('#lofi2').animate({opacity: 1});
		});
		$('#lofi_radio').fadeOut(function(){
			$('#lofi_radio').animate({opacity: 0}, 1);
		});
	});
	
	$('#rock').click(function(){
		$('#rock2').animate({opacity: 0});
		$('#rock').removeClass();
	$('#rock_cancel').animate({opacity: 1}, 1);
		$('#rock_cancel').fadeIn();
		$('#rock_radio').animate({opacity: 1}, 1);
		$('#rock_radio').fadeIn();
	});
	
	$('#rock_cancel').click(function(){
		$('#rock_cancel').fadeOut(function(){
			$('#rock2').animate({opacity: 1});
		});
		$('#rock_radio').fadeOut(function(){
			$('#rock_radio').animate({opacity: 0}, 1);
		});
	});
	
	$('#rap').click(function(){
		$('#rap2').animate({opacity: 0});
		$('#rap').removeClass();
	$('#rap_cancel').animate({opacity: 1}, 1);
		$('#rap_cancel').fadeIn();
		$('#rap_radio').animate({opacity: 1}, 1);
		$('#rap_radio').fadeIn();
	});
	
	$('#rap_cancel').click(function(){
		$('#rap_cancel').fadeOut(function(){
			$('#rap2').animate({opacity: 1});
		});
		$('#rap_radio').fadeOut(function(){
			$('#rap_radio').animate({opacity: 0}, 1);
		});
	});
	
	$('#classic').click(function(){
		$('#classic2').animate({opacity: 0});
		$('#classic').removeClass();
	$('#classic_cancel').animate({opacity: 1}, 1);
		$('#classic_cancel').fadeIn();
		$('#classic_radio').animate({opacity: 1}, 1);
		$('#classic_radio').fadeIn();
	});
	
	$('#classic_cancel').click(function(){
		$('#classic_cancel').fadeOut(function(){
			$('#classic2').animate({opacity: 1});
		});
		$('#classic_radio').fadeOut(function(){
			$('#classic_radio').animate({opacity: 0}, 1);
		});
	});
	
	$('#kpop').click(function(){
		$('#kpop2').animate({opacity: 0});
		$('#kpop').removeClass();
	$('#kpop_cancel').animate({opacity: 1}, 1);
		$('#kpop_cancel').fadeIn();
		$('#kpop_radio').animate({opacity: 1}, 1);
		$('#kpop_radio').fadeIn();
	});
	
	$('#kpop_cancel').click(function(){
		$('#kpop_cancel').fadeOut(function(){
			$('#kpop2').animate({opacity: 1});
		});
		$('#kpop_radio').fadeOut(function(){
			$('#kpop_radio').animate({opacity: 0}, 1);
		});
	});
	
});