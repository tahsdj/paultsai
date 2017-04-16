$(() =>{
	let scroll_position = 0
	$(window).scroll(function(){
	    let scrollVal = $(this).scrollTop()
	    let speed = 50
	    if ( scrollVal >= 75 ) {
	    	$('.top').css({
	    		'height':'80px',
	    		//'background-color':'white'
	    	})
	    }else{
	    	$('.top').css({
	    		'height':'280px',
	    		'opacity':'1',
	    		'background-color':'#A5DEF1'
	    	})
	    }
	})
});

$(() =>{
	$('.projects > header > a').click(function (){
		let index = $(this).index()
		const $current = $('.projects .container > div').eq(index)
		$current.children('.arrow-up').css({
			'left':'calc((100%/3)/2 - 10px + '+index+'*(100%/3))'
		})
		$current.addClass('current').siblings('.current').removeClass('current')
	})
})