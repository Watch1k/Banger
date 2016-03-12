head.ready ->
	### phoneInd - phone identifier ###

	### Clear placeholder ###
	->
		$('input, textarea').focus ->
			$(this).data 'placeholder': $(this).attr('placeholder')
			$(this).attr 'placeholder': ''
		$('input, textarea').blur ->
			$(this).attr 'placeholder': $(this).data('placeholder')
	
	$('.search-btn').on 'click', ->
		$('.search-inp').toggleClass 'is-active'