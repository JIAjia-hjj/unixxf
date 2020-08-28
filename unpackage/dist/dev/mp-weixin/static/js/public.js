//节流
export function throttle(fn,interval=300){
	let canRun=true;
	return function(){
		if(!canRun) return;
		canRun=false;
		setTimeout(()=>{
			fn.apply(this,arguments);
			canRun = true;
		},interval)
	}
}
//防抖
export function debounce(fn,interval=300){
	let timeout=null;
	return function(){
		if(timeout) clearTimeout(timeout);
		timeout=setTimeout(()=>{
			fn.apply(this,arguments)
		},interval);
	}
}