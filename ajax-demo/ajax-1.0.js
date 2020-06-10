/*

方法的参数:
get: url,params({a:1,b:2}),success(function)
post:url,obj,success(function)

*/

window.ajax = {
	
	get: function(url,success,params){
		
		let xhr = new XMLHttpRequest();
		
		xhr.withCredentials = true;
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				success(JSON.parse(xhr.response));//JSON.parse(xhr.response)  就相当于箭头函数的指针
			}
		}
		
		let data = '';
		for(let k in params){
			data += `${k}=${params[k]}&`;
		}
		data = data.replace(/.$/,'');
			
		xhr.open('get',`${url}?${data}`);
		xhr.send(null);
		
	},
	
	post: function(url,success,obj){
		
		let xhr = new XMLHttpRequest();
		
		xhr.withCredentials = true;
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				success(JSON.parse(xhr.response));
			}
		}
		
		xhr.open('post',url);
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send(JSON.stringify(obj));
		
	}
	
}