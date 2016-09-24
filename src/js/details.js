$(function(){
	$('#midtopNav').on('mouseover','#shendian',function(){
		$('#bigmenu').show();
	}).on('mouseleave','#shendian',function(){
		$('#bigmenu').hide();
	});
	
	$('.combo').on('click','dd',function(){
		$(this).addClass('comboon').siblings().removeClass('comboon');
	})
	
	$('.sum').on('click','.up',function(){
		var $this=$(this);
		var num=parseInt($this.prev().val())+1;
		$('.sum').find('input').val(num);
		
	}).on('click','.down',function(){
		
		var num=parseInt($('.sum').find('input').val())-1;
		if(num>0)
		$('.sum').find('input').val(num);
		
	})
	
	$('.phone').on('mouseover',function(){
		$('#shaoma').stop().show().animate({'top':-170},800)
	}).on('mouseleave',function(){
		setTimeout(function(){
			$('#shaoma').stop().animate({'top':-260}).hide();
		},5000)
	})
	$('#goodsdetails').on('click','li',function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		var index=$(this).index();
		$('.fourbox').children('div').eq(index).show().siblings('div').hide();
	})
	
	$(window).on('scroll',function(){
		var top=$(window).scrollTop()-1167;
		if($(window).scrollTop()>=1167){
			$('#goodsdetails').css({
				'position':'absolute',
				'top':top,
				'z-index':100
			})
		}else{
			$('#goodsdetails').css({
				'position':'relative',
				
			})
		}
	})
	
	
	
	
	
	
	
	
	
	
	$('#addcar').on('click',function(){
		var goods={
			 blodred:parseFloat($('.bigprice').text()),
			num:parseInt($('.sum input').val()),
			imgsrc:$('#list').find('img').eq(0).attr('src'),
			introduce:$('.medtitle').find('h1').text()
		}
		var oDate = new Date();

		oDate.setDate(oDate.getDate() + 5);
	
		document.cookie='liuweidihuangwan='+JSON.stringify(goods)+';path=/'+";expires=" +oDate ;
	})	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})