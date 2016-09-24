$(function(){
	
	var Telphone,Password;
	var $passwordagain=$('#passwordagain');
	
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
			{
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
	$passwordagain.find('input').on('blur',function(){
				var mimaagain=$(this).val();
				var mima=$('#password input').val();
				var reg=/^\w{6,20}$/;
				//console.log(reg.test(mima))
				if(mima==mimaagain)
				{
					Password=mima;
					$(this).parent().find('.warm').hide();
					$(this).parent().find('.suggest').show();
				}
				else{
					$(this).parent().find('.warm').show();
					$(this).parent().find('.suggest').hide();
				}
			
				if(mimaagain.length==0)
				{
					$(this).next('span').text("不能为空").show();
				}else{
					$(this).next('span').hide();
				}
			});
			
			$('#yanzhengma').on('click','.randombot',function(e){
				e.preventDefault();
				$('.random').text(randomNum());
			}).on('blur','input',function(){
				if(!($(this).val()==$('.random').text()))
				$(this).parent().find('.warm').show();
			})
			function randomNum(){
				var min=1000;
				var max=9999;
				var result = parseInt(Math.random()*(max-min+1)) + min;//0~1
				return result;
			}
			
			$('#midleftbot').on('click','button',function(){
				if(Telphone.length!=0&&Password.length!=0)
					addCookie('phone',Telphone,14);
					addCookie('password',Password,14)
			})
			
			$('#partner').on('mouseover','i',function(){
				$(this).addClass('on').siblings('i').removeClass('on');
			}).on('mouseleave',function(){
				$(this).find('i').removeClass('on');
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
})