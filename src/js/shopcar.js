$(function(){
	$('.checkall').on('click','input',function(){
		
		if(this.checked)
		{
			$('input').attr('checked',true)
		}else{
			$('input').attr('checked',false)
		}
	})
		
	$('.count').on('click','.plus',function(){
		var $ul=$(this).parent().parent();
		var num=parseInt($(this).prev('.number').text())+1;
		$(this).prev('.number').text(num);
		var price=parseInt($('.money').find('span').text())*num;
		$ul.find('.sum').find('span').text(price);
		
	})
	.on('click','.minus',function(){
			console.log()
		var $ul=$(this).parent().parent();
		var num=1;
		if(num>0)
		 num=parseInt($(this).next('.number').text())-1;
		$(this).next('.number').text(num);
		var price=parseInt($('.money').find('span').text())*num;
		$ul.find('.sum').find('span').text(price);
		
	});
	
	$('.action').on('click','dd',function(){
		$(this).parent().parent().parent().remove();
	});
	$('.check').on('click','input',function(){
		var num=0
		var $ul=$(this).parent().parent();
		num=parseInt($(this).parent().parent().find('.weight').find('span').text());
	
	//console.log($(this).parent().parent().find('.weight').find('span').text())
		var weight=parseInt($('#allweight').find('dd span').text());
		//console.log(weight)
		if(this.checked)
		{num+=weight;
		
		}else
		num=weight-num;
		$('#allweight').find('dd span').text(num);
		var trans=num*5
		$('#alltrans').find('dd span').text(trans);
		
		
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
	})
	
	
	$('.only').each(function(index,item){
		//console.log(index,item)
		var num=parseInt($(item).find('.count').find('.number').text())
		var price=parseInt($(item).find('.money').find('span').text())*num;
		$('.sum').find('span').text(price);
	})
	
	
	
	
	
	$('.delete').on('click',function(){
		$('input').each(function(index,item){
			/**/
		})
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
