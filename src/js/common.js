head.ready(function() {
    // phoneInd - phone identifier

    // Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

    $('.search-btn').on('click', function(){
        $('.search-inp').toggleClass('is-active');
    });


});