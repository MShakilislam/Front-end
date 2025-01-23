

$(document).ready(function(){

	//mobile menu
	$('.menu_icon').click(function(){
		$('.menu ul').slideToggle();
	});

	//counter Up
	$('.single_fun h1').counterUp({
	    delay: 10,
	    time: 1000
	});

})