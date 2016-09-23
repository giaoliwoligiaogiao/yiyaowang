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
	/*轮播图*/
	$('.lunbotu').myFocus({imgs:['../img/lunbotu1.jpg','../img/lunbotu2.jpg','../img/lunbotu3.jpg','../img/lunbotu4.jpg','../img/lunbotu5.jpg']});

		$('#f1 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f2 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f3 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f4 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f5 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f6 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f7 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f8 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	$('#f9 .minilubotu').myFocus({imgs:["../img/1473316231580125.jpg","../img/1473828438698207.jpg","../img/1473828851474209.jpg"],width:605}
	);
	
	$('#botsec').on('mouseenter','li',function(){
		$(this).stop().animate({'top':-15},function(){
			$(this).stop().animate({'top':0});
		})
	});
		
	$('#floor').on('mouseenter','li',function(){
		$(this).find('a').hide().parent().find('span').css('display',"block");
	}).on('mouseleave',"li",function(){
		$(this).find('a').css('display',"block").parent().find('span').hide();
	});
	var $nav = $('#floor');
	var $floor = $('#allfloor .floor');
	$(window).on('scroll',function(){
		var scrollTop=$(window).scrollTop();
		console.log(scrollTop);
		if(scrollTop>692)
		{
			$('#floor').show()
			
			
		}
		else{
			$('#floor').hide();
		}
		if(scrollTop<5330){
			var top=$(window).scrollTop();
			//console.log(top,$('.floor').eq(0).outerHeight())
			var num=Math.ceil((top-462)/(30+$('.floor').eq(0).outerHeight()));
			if(num<10)
			$('#floor li').eq(num).find('a').hide().parent().siblings().find('a').show();
			$('#floor li').eq(num).find('span').css('display','block').parent().siblings().find('span').hide()
			//console.log(num);
		}else{
			
		}
	});

	$('#floor').on('click','li',function(){
				var num=$(this).index();
				//console.log($floor.length);
				if(num==9)
				{
					var scrollTop =5036;
				}else
				{
				//var scrollTop = $floor.eq(num).offset().top - ($(window).height()-$floor.eq(num).outerHeight())-600;
				var scrollTop=489*num+380;
				}	//console.log(scrollTop);
				$('html,body').animate({scrollTop:scrollTop});
				
			});

	

			
		
		
	
})
