$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip();

	$('a').click(function(event){
		if (this.hash !=="") {
			event.preventDefault();
			var gato= this.hash;
			var position= $(gato).offset().top - 100;

			$("html, body").animate({
				scrollTop: position
			},800, function(){
				window.location.hash = gato;
			});

		};
	});


});