$(function(){
	let scroll_position = 0
	$(window).scroll(function(){
	    let scrollVal = $(this).scrollTop()
	    let speed = 50
	    if ( scrollVal >= 75 ) {
	    	$('header').css({
	    		'height':'80px',
	    		//'background-color':'white'
	    	})
	    }else{
	    	$('header').css({
	    		'height':'280px',
	    		'opacity':'1',
	    		'background-color':'#A5DEF1'
	    	})
	    }
	})
})