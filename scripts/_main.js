$.noConflict();
jQuery(document).ready(function($) {
	$('#scrollLink').localScroll({duration:800});
	$('body').css('display', 'none');
	$('body').fadeIn(1000);

	
	$('.navbar-default .navbar-nav>li>a').click(function(e) {
			var target = $(e.target);
			if (target.is(".footer-contact")  == false){
				event.preventDefault();
				newLocation = this.href;
				$('body').fadeOut(1000, newpage);
				function newpage() {
					window.location = newLocation;
					}
				}
	});					
});