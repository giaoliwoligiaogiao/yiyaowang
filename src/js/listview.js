$(function(){
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
	$('#shendian').on('mousemove',function(){
		$('#bigmenu').show();
		
		
	}).on('mouseout',function(){
		$("#bigmenu").hide();
		
		
	}).on('mouseover','li',function(){
		
		
		$(this).addClass('on').find('a').stop().animate({"padding-left":20});
		
		$('.secmenu').show().find('.thrmenu').show();
	
	}).on('mouseleave','li',function(){
		
		$(this).removeClass().find('a').stop().animate({"padding-left":0});
		
		$('.secmenu').hide().find('.thrmenu').hide();
	});
	
	$('#APP').on('mouseover',function(){
		$('#APP .miss').show();
			console.log(10)
	}).on('mouseleave',function(){
		$('#APP .miss').hide();
	});
		
	$('#tiaojian').on('mouseover','li',function(){
		$(this).find('ul').show().on('click','li',function(){
			
		});
	}).on('mouseleave','li',function(){
		$(this).find('ul').hide();
	});
	
	
	$(window).on('scroll',function(){
		$.ajaxSetup({
				url:'../json/listview.json',
				dataType:'json',
				
				success:function(res){
					//console.log(res);
					
				$.each(res,function(index,item){
					//console.log(index,item);
				var $li1=$('<li><img src="'+item.imgsrc+'" /></li>');
				var $li2=$('<li class="price"><span class="boldred">'+item.blodred+'</span><span class="del">'+item.del+'</span></li>');
				var $li3=$('<li class="introduce"><i></i>'+item.introduce+'</li>');
				var $li4=$(' <li class="litgood"><i></i><span>'+item.litgood+'</span><span class="discuss right">评论<em class="red">'+item.red+'</em>条</span></li>')
				var $li5=$('<li class="detailsBot"><span class="jianhao">-</span><span class="num">'+item.num+'</span><span class="jiahao">+</span><a class="gouwuche right"><i></i>'+item.gouwuche+'</a></li>')
				var $ul=$('<ul class="details"/>')
				$li1.appendTo($ul);
				$li2.appendTo($ul);
				$li3.appendTo($ul);
				$li4.appendTo($ul);
				$li5.appendTo($ul);
				
				
				var $li=$('<li/>').appendTo($('.goodslist'));
				$ul.appendTo($li);
				
				})
			}
		})
		if($(window).scrollTop()>1000&&$(window).scrollTop()<5000)
		{ 
			$.ajax();
			
		}
		
	})
	
	
	$('.goodslist').on('click','a',function(e){
			e.stopPropagation();
			//console.log($(this).parent().parent());
			var $ul=$(this).parent().parent();
			var price=$(this).parent().parent().find('.boldred').text();
				//console.log(x)
			var num=$ul.find('.num').text();
			addCookie(price,num,1);
	}).on('click','.jiahao',function(){
			var num=parseInt($(this).prev('.num').text())+1;
		$(this).prev('.num').text(num);
		
	}).on('click','.jianhao',function(){
			
		if(num>1)
		$(this).next('.num').text(num);
		var num=parseInt($(this).next('.num').text())-1;
	})
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
