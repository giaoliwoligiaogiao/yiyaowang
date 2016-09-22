;$(function(){
	$('#topFirstAddress').on('mouseover',function(){
		$('#goodsAddress').show().on('click','a',function(){
			$('.goodsAddress').text($(this).text());})
	})
	.on('mouseleave',function(){
	$('#goodsAddress').hide();
	});
	
	
	$('.xialakuang').on('mouseover',function(){
		$('.Atanchuang').show();
	}).on('mouseleave',function(){
		$('.Atanchuang').hide();
	});
	
	$('#phone').on('mouseover',function(){
		$('.erweima').show();
	}).on('mouseleave',function(){
		$('.erweima').hide();
	});
	$('#shendian').on('mouseover','li',function(){
		$(this).addClass('on').find('a').stop().animate({"padding-left":20});
		$('.secmenu').show();
	}).on('mouseleave','li',function(){
		$(this).removeClass().find('a').stop().animate({"padding-left":0});
		$('.secmenu').hide();
	});
	
	$('#APP').on('mouseover',function(){
		$('#APP .miss').show();
			console.log(10)
	}).on('mouseleave',function(){
		$('#APP .miss').hide();
	});
		
})