/**
*封装了一个获得标签内容的函数
*@param ele 要操作的元素
*@return {*} 把获取到的内容返回
*/
function getText(ele){
	// 能力检测    就是看当前的浏览器是支持此对象的属性或是方法
	if(typeof ele.innerText=='string'){
		return ele.innerText;//ie8及其之前的浏览器
	}else{
		return ele.textContent;//低版本火狐
	}
}
/**
*封装了一个设置标签内容的函数
*@param ele 要操作的元素 val要设置的内容
*/
function setText(ele,val){
	// 能力检测    就是看当前的浏览器是支持此对象的属性或是方法
	if(typeof ele.innerText=='string'){
		 ele.innerText=val;
	}else{
		 ele.textContent=val;
	}
}