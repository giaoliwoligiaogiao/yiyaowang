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
	$('#bigmenu').on('mouseover','li',function(){
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
		
	$('#server').on('click','a',function(){
		$(this).addClass('on').siblings('a').removeClass()
		var num=$(this).addClass('on').index();
		//console.log(num);
		$('#server ul').eq(num).removeClass().siblings('ul').addClass('miss');
	});
	$('#server1').on('mouseenter','i',function(){
		$(this).stop().animate({'top':-15},function(){
			$(this).stop().animate({'top':0});
		})
	});
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
})
