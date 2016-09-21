$(function(){
	
	var $smallPic=$('.smallPic');
	var $span=$('.smallPic span');
	var $right=$('.right');
	var $rightImg=$('.right img')
	
	$('#list').on('click','li',function(){
		var idx=$(this).index();
		$smallPic.find('img').remove();
		$('<img/>').attr('src','../css/img/pic'+(idx+1)+'.jpg').appendTo($smallPic);
		
		$right.find('img').remove();
		$('<img/>').attr('src','../css/img/pic'+(idx+1)+'.jpg').appendTo($right);
		
	})
	
	//鼠标移上
	$smallPic.mousemove(function(){
		
		$right.css('display','block');
		$span.css('display','block');
	})
	
	//鼠标移开
	$smallPic.mouseout(function(){
		
		$right.css('display','none');
		$span.css('display','none');
	})
	
	//鼠标移动
	$smallPic.mousemove(function(e){
		
		var x=e.pageX-$(this).offset().left-$span.outerWidth()/2;
		var y=e.pageY-$(this).offset().top-$span.outerHeight()/2;
		console.log(y)
		if (x<0) {
			x=0;
		}
		else if (x>$smallPic.outerWidth()-$span.outerWidth()) {
			x=$smallPic.outerWidth()-$span.outerWidth();
		}
		
		if (y<0) {
			y=0
		}
		else if(y>$smallPic.outerHeight()-$span.outerHeight()){
			y=$smallPic.outerHeight()-$span.outerHeight();
		}
		$span.css({'left':x,'top':y})
		//console.log(x,y)
		var percentX=x/($smallPic.outerWidth()-$span.outerWidth());
		var percentY=y/($smallPic.outerHeight()-$span.outerHeight());
		
		var bigy=percentY*($('.right img').outerHeight()-$right.outerHeight());
		
		if (bigy>$('.right img').outerHeight()-$right.outerHeight()) {
			bigy=$('.right img').outerHeight()-$right.outerHeight();
		}
		//console.log($('.right img').outerHeight()-$right.outerHeight());
		$('.right img').css({
			'left':-percentX*($('.right img').outerWidth()-$right.outerWidth()),
			'top':-bigy
		})
		
	})	
})
