/*
	工具函数
*/

export default {
	// 节流，每隔一段时间执行一次
	throttle (fn, delay) {
		let timer = null;

		return function () {
			if (!timer) {
				timer = setTimeout(() => {
					fn.apply(this, Array.prototype.slice.call(arguments, 0))
					timer = null
				}, delay)
			}
		}
	},

	// 函数防抖，只执行最后一次
	debounce (func, delay){
		let timer;
		return function (...args) {
			if (timer) {
				clearTimeout(timer)
			}

			timer = setTimeout(() =>{
				func.apply(this, args)
			}, delay)
		}
	},

	// 取localStorage
	getUserInfo () {
		let userObj = JSON.parse(localStorage.getItem('user'))
		return userObj
	}
}