$(function(){
	var Telphone,Password;
	 var $tel=$('#tel');
	var $password=$('#password');
		$tel.find('input').on('blur',function(){
		var tel=$('#tel input').val();
			var reg=/^1[35678]\d{9}$/;
			//console.log(reg.test(tel))
			if(reg.test(tel))
			{
				$('#tel h3').hide();
				Telphone=tel;
			}
			else{
				$('#tel h3').show();
			}
			
			if(tel.length==0)
			{
				$(this).next('span').text("不能为空").show();
			}else{
				$(this).next('span').hide();
			}
		});
		$password.find('input').on('blur',function(){
			var mima=$(this).val();
			var reg=/^\w{6,20}$/;
			//console.log(reg.test(mima))
			if(reg.test(mima))
			{   Password=mima;
				$('#password .warm').hide();
				$('#password .suggest').show();
			}
			else{
				$('#password .warm').show();
				$('#password .suggest').hide();
			}
		
			if(mima.length==0)
			{
				$(this).next('span').text("不能为空").show();
			}else{
				$(this).next('span').hide();
			}
		});
		
		$('#midleftbot').on('click','button',function(){
			//alert(document.cookie);
			var num=parseInt(getCookie('phone'));
			var mima=parseInt(getCookie('password'));
			console.log(num);
			if(Telphone==num&&Password==mima){
				
				alert('登录成功')
			}else{
				alert('missing')
			}
		})
		
		
});
