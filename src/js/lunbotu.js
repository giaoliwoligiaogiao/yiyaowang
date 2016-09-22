;(function($){
	// $.fn.myFocus
	$.fn.extend({
		myFocus:function(opts){
			var defaults = {
				width:750,
				imgs:[],//大图列表
				btn:false,//是否显示前后按钮
				smallPic:false,//是否显示小图
				navSmall:true,//是否显示小导航栏
				speed:2000,	//切换时间
				autoplay:true, //自动轮播
				type:'left',//left,top
			};
			return this.each(function(){
				var $self = $(this);
				
				var opt = $.extend({},defaults,opts);

				var $bigPic,$smallPics,$navSmall;
					
				// 默认显示第一张
				var index = 0;

				init();

				// 轮播

				if(opt.autoplay){
					var timer;

					$self.on('mouseenter',function(){
						clearInterval(timer);
					}).on('mouseleave',function(){
						
						timer = setInterval(function(){
									
							index++;
							showPic();
						},opt.speed);
					}).trigger('mouseleave')
				}
				

				// 上一张
				$self.on('click','.prev',function(){
					index--;
					showPic();
				})

				// 下一张
				.on('click','.next',function(){
					index++;
					showPic();
				})

				// 小图切换
				.on('click','.smallpic li',function(){
					index = $(this).index();
					showPic();
				});

				// 生成html结构
				function init(){
					// 生成html结构
					// var $myFocus = $('<div/>').addClass('myfocus');
					$bigPic = $('<ul/>').addClass('bigpic');

					// 遍历图片
					/*$.each(opt.imgs,function(idx,imgsrc){

					})*/
					var lis = $.map(opt.imgs,function(imgsrc){
						
						return '<li><img src="' + imgsrc + '"/></li>'
					});
					
					var lins=$.map(opt.imgs,function(imgsrc){
					return '<li></li>'
					});
					
					// 生成大图
					$bigPic.html(lis);
					$bigPic.appendTo($self)

					// 生成小图
					if(opt.smallPic){
						$smallPic = $('<div/>').addClass('smallpic').html(lis);
						$smallPic.appendTo($self);
					}
					
					//生成点击小导航栏
					if(opt.navSmall){
						$navSmall=$('<ul/>').addClass('navSmall').html(lins);
						$navSmall.appendTo($self);
					}
					$('<li><img src="' + opt.imgs[0] + '"/></li>').appendTo($bigPic);
					//console.log(1)
					//给按钮绑定点击事件
	          		if(opt.navSmall){
	          			//.each(function(idx){
			          		$navSmall.find('li').on('click',function(){
			          			//console.log($(this));
				          		index=$(this).index();
				          		showPic();
		          			})	          		
		          		//})
	          		}
		          	
					
					// 显示前后按钮
					if(opt.btn){
						var $prev = $('<a href="#"/>').html('&lt;').addClass('prev');
						var $next = $('<a href="#"/>').html('&gt;').addClass('next');

						$self.append([$prev,$next]);
					}

					showPic();
				}

				// 图片显示
				function showPic(){
					if(index>opt.imgs.length){
						index = 0;
						
						$bigPic.css({'left':0});
					}else if(index<0){
						index = opt.imgs.length -1;
					}
				//	console.log(index)
						var count=-index*opt.width
					$bigPic.animate({left:count}).siblings('li').animate({opacity:0});
					console.log(index,opt.imgs.length)
					if(index==opt.imgs.length)
					{$navSmall.find('li').eq(0).addClass('select').siblings().removeClass();}
					else 
					{$navSmall.find('li').eq(index).addClass('select').siblings().removeClass();
					}console.log($navSmall.find('li').eq(index))
					
					if(opt.smallPic) $smallPic.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0.5});
				}
			});
		}
	})
})(jQuery);