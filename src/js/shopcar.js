$(function(){
	var number=0;
	
	$.ajaxSetup({
				url:'../json/listview.json',
				dataType:'json',
				
					success:function(res){
							//console.log(res);
						$.each(arr,function(index,item1){	
							$.each(res,function(index,item){
						
							//console.log(index,item);
							
									if(item1==item.blodred)
									{
										var num=getCookie(item1);
										//console.log(getCookie(item1))
										var sum=num*item.blodred;
										var $li1=$('<li class="check"><input type="checkbox" name="check" ></li>');
										var $li2=$('<li class="goodsdetail"><img src="'+item.imgsrc+'"><span>'+item.introduce+'</span></li>');
										var $li3=$('<li class="action" style="float: right;"><dl><dt class="select">收藏</dt><dd class="del">删除</dd></dl></li>');
										
										var $li4=$('<li class="sum" style="float: right;">￥<span>'+sum+'</span></li>');
										var $li5=$('<li class="has" style="float: right;">有货</li>');
										var $li6=$('<li class="weight" style="float: right;"><span></span>kg</li>');
										var $li7=$('<li class="count" style="float: right;"><span class="minus">-</span><span class="number">'+num+'</span><span class="plus">+</span></li>');
										var $li8=$('<li class="money" style="float: right;">￥<span>'+item.blodred+'</span></li>');
										var $ul=$('<ul class="only"/>')
										$li1.appendTo($ul);
										$li2.appendTo($ul);
										$li3.appendTo($ul);
										$li4.appendTo($ul);
										$li5.appendTo($ul);
										$li6.appendTo($ul);
										$li7.appendTo($ul);
										$li8.appendTo($ul);
										
										//var $li=$('<li/>').appendTo($('.goodslist'));
										$ul.appendTo($('#bigbigbox'));
										
									}
								})
					})
						init();
				}
		})
	var arr=[]
	for(i=0;i<10;i++)
	{
		var num=i+i*10+i*100;
		var str=getCookie(num);
		
		if(str.length!=0)
		{
			console.log(str);
			arr.push(num);
			
		}
	}
	$.ajax();
	function getCookie(name)
	{
		// 得到cookie
		// username=老马; password=123456
		var str = document.cookie;
	
		// 按照 ; 分割
		var arr = str.split("; ");
		// username=老马
		// password=123456
	
		for (var i = 0; i < arr.length; i++)
		{
			var arr1 = arr[i].split("=");
			
			if (arr1[0] == name)
			{
				return arr1[1];
			}
		}
	
		// 如果一个都找不到，就返回 "";
		return "";
	}
	
		
	
	
	
	
	var str=getCookie('liuweidihuangwan');
	if(str!=0){
		var obj=JSON.parse(str);
		//console.log(getCookie(item1))
		//{blodred: 15.8, num: 14, imgsrc: "../css/img/pic1.jpg", introduce: "同仁堂  六味地黄丸  120丸"}
		var sum=num*obj.blodred;
		var $li1=$('<li class="check"><input type="checkbox" name="check" ></li>');
		var $li2=$('<li class="goodsdetail"><img src="'+obj.imgsrc+'"><span>'+obj.introduce+'</span></li>');
		var $li3=$('<li class="action" style="float: right;"><dl><dt class="select">收藏</dt><dd class="del">删除</dd></dl></li>');
		
		var $li4=$('<li class="sum" style="float: right;">￥<span>'+sum+'</span></li>');
		var $li5=$('<li class="has" style="float: right;">有货</li>');
		var $li6=$('<li class="weight" style="float: right;"><span></span>kg</li>');
		var $li7=$('<li class="count" style="float: right;"><span class="minus">-</span><span class="number">'+obj.num+'</span><span class="plus">+</span></li>');
		var $li8=$('<li class="money" style="float: right;">￥<span>'+obj.blodred+'</span></li>');
		var $ul=$('<ul class="only"/>')
		$li1.appendTo($ul);
		$li2.appendTo($ul);
		$li3.appendTo($ul);
		$li4.appendTo($ul);
		$li5.appendTo($ul);
		$li6.appendTo($ul);
		$li7.appendTo($ul);
		$li8.appendTo($ul);
		$ul.appendTo($('#bigbigbox'));
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('.checkall').on('click','input',function(){
		
		if(this.checked)
		{
			var money=0;
			var weight=0;
			$('input').prop('checked',true);
			/*金额全选之后*/
			$('#bigbigbox').find('.sum').each(function(index,item){
				money+=parseInt($(item).find('span').text());
			})
			$('#allselect').find('span').text(money);
			$('.pricesum').find('span').text(money);
			
			
			$('#bigbigbox').find('.weight').each(function(index,item){
				weight+=parseInt($(item).find('span').text());
			})
			
			$('#allweight').find('dd span').text(weight);
			$('.allweight').find('span').text(weight);
			//console.log(num);
			//$ul.find('.weight').find('span').text(num);
			//var trans=parseInt($('#allweight').find('dd span').text())*0.5;
			
		}else{
			$('input').prop('checked',false);
			$('#allweight').find('dd span').text(0);
			$('.allweight').find('span').text(0);
			$('#allselect').find('span').text(0);
			$('.pricesum').find('span').text(0);
		}
	})
		
	$('#bigbigbox').on('click','.plus',function(){
		var $ul=$(this).parent().parent();
		var num=parseInt($(this).prev('.number').text())+1;
		$(this).prev('.number').text(num);
		var price=parseInt($ul.find('.money').find('span').text())*num;
		$ul.find('.sum').find('span').text(price);
		
	})
	.on('click','.minus',function(){
			console.log()
		var $ul=$(this).parent().parent();
		var num=1;
		if(num>0)
		 num=parseInt($(this).next('.number').text())-1;
		$(this).next('.number').text(num);
		var price=parseInt($ul.find('.money').find('span').text())*num;
		$ul.find('.sum').find('span').text(price);
		
	});
	
	$('#bigbigbox').on('click','dd',function(){
		$(this).parent().parent().parent().remove();
	});
	$('#bigbigbox').on('click.wan','input',function(){
		var num=0
		var $ul=$(this).parent().parent();
		num=Math.ceil($(this).parent().parent().find('.weight').find('span').text());
	//console.log($(this).parent().parent().find('.weight').find('span').text())
		var weight=parseInt($('#allweight').find('dd span').text());
		//console.log($('#allweight').find('dd span'))
		if(this.checked)
		{num+=weight;
		}else
		num=weight-num;
		$('#allweight').find('dd span').text(num);
		console.log(num);
		//$ul.find('.weight').find('span').text(num);
		var trans=parseInt($('#allweight').find('dd span').text())*0.5;
		$('#alltrans').find('dd span').text(trans);
		$('.freight').find('span').text(trans);
//		
//		
		var money=0;
		//console.log($('#allselect').find('dd span').text(num));
		money=parseInt($ul.find('.sum').find('span').text());
		sum=parseInt($('#allselect').find('span').text());
		if(this.checked)
		{
			sum+=money;
		}else
		sum=sum-money;
		
		$('#allselect').find('span').text(sum);
		$('.pricesum').find('span').text(sum+trans);
	})
	
	init();
	function init(){
		$('.only').each(function(index,item){
			//console.log(index,item)
			var num=parseInt($(item).find('.count').find('.number').text())
			var price=parseInt($(item).find('.money').find('span').text())*num;
			//console.log(num,price)
			var weight=num*price*0.001;
			$(item).find('.weight').find('span').text(weight);
			$(item).find('.sum').find('span').text(price);
			
		})
	
	}
	
	
	
	$('.delete').on('click',function(){
		$('input').each(function(index,item){
			/**/
			var $ul=$(item).parent().parent();
			
			if($ul.hasClass('only')&&item.checked)
			{
				$ul.remove();
				
			}
		})
	});
	
	$('.clearall').on('click',function(){
		$('.only').remove();
	})
	
	$('.over').on('click',function(){
		var sum=0;
		sum=$('.pricesum').find('span').text();
		//$('.only').find('a').css('border','none')
			alert('恭喜你在本网站消费'+sum+'');
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
