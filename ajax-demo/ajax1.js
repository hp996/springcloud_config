/*
方法的参数：
get:url,params({a:1,b:2})
post:url,obj,function
*/
window.ajax ={
	get:function(url,success,params){
		
		let xhr=new XMLHttpRequest();
		
		xhr.withCredentials = true;//允许cookie配合session使用
		
		//注册事件，用来监听xhr的状态改变
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				console.log(xhr.response);
				success(JSON.parse(xhr.response))
			}
		}
		let data='a=1&b=2';
		for(let k in params){//params是一个对象
			data +=`${k}=${params[k]}&`;
			console.log(k);//遍历k获取对象所有的属性key
			console.log(params[k]);//遍历k获取对象所有的属性key的值value
		}
		data=data.replace(/.$/,'');//最后一个字符换成空
		console.log('--'+data+'--');//测试
		
		xhr.open('get',`${url}?${data}`);
		xhr.send(null);
		
	},
	post:function(url,success,obj){
		let xhr=new XMLHttpRequest();
		
		xhr.withCredentials = true;//允许cookie配合session使用
		
		//注册事件，用来监听xhr的状态改变
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				console.log(xhr.response);
				success(JSON.parse(xhr.response))
			}
		}
		xhr.open('post',url);
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send(JSON.stringify(obj));
	}
}