$(document).ready(function(){

	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

	$(window).on('scroll load', function(){
		$('#menu').removeClass('fa-times');
		$('header').removeClass('toggle');
	});

	$('a[href*="#"]').on('click', function(e){
		e.preventDefault()

		$('html,body').animate({
			scrollTop : $($(this).attr('href')).offset().top,
		}, 500, 'linear'
		);
	});


});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx5Ev4L20L6icGNQB4MzI3DTNK6HcdCNpnMqWeWWX3QwU9XUI3HOs1S-vTD-ri8bKwq/exec'
	const form = document.forms['submit-to-google-sheet']
  
	form.addEventListener('submit', e => {
	  e.preventDefault()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response),form.reset())
		.catch(error => console.error('Error!', error.message))
	});