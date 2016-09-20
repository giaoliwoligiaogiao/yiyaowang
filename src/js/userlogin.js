
			$(function(){
				// 表单验证插件
				$("form").validate({

					// 设置验证规则
					rules:{
						user:{required:true,rangelength:[3,10]},
						email:{email:true,required:true},
						url:{url:true},
						tel:{number:true}
					},

					// 设置提示信息
					messages:{
						user:{required:'温馨提示：这是一个必填字段'},
						email:{email:'亲，邮箱地址哦'}
					}
				});
			});
