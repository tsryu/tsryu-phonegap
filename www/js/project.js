( function( $ ) {
  // 'use strict';
	$(document).ready(function(){
		if($('.home').length){
			fullpage_event();
		}
		function fullpage_event(){
			$('#fullpage').fullpage({
				// verticalCentered: false,
				scrollOverflow: true,
				// loopBottom: true,
				// navigation: true,
				// navigationPosition: 'right',
		        // afterRender: function () {
		        //     setInterval(function () {
		        //         $.fn.fullpage.moveSlideRight();
		        //     }, 4000);
		        // },
				// navigationPositionavigation: true,
				// navigationPosition: 'right',
				// navigation: true,
				// anchors: ['section01', 'section02', 'section03']
			});
		}
	});
	$(window).load(function(){
		//로딩없애기
		$('.wrap-loading').fadeOut('fast');
	});

	if($('.singular').length){
		$(window).scroll(headerFix);
	}
	function headerFix() {
    	var currentScroll = $(document).scrollTop();
    	if(currentScroll > 50){
            $('.site-header').addClass('fixed');
        }else{
        	$('.site-header').removeClass('fixed');
        }
    }
  // $('[data-toggle="tooltip"]').tooltip();
} )( jQuery );
