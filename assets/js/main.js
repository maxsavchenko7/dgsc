jQuery(($) => {

    $('.search-form__submit').on('click', function (e) {
        if ($(this).parent('.search-form').hasClass('active')) return;
        
        e.preventDefault();
        $(this).parent().addClass('active');
    });

    $(document).mouseup( function(e){
		let searchForm = $('.search-form');

		if ( !searchForm.is(e.target) && !searchForm.has(e.target).length ) { 
			searchForm.removeClass('active');
		}
	});

    console.log('test');

});