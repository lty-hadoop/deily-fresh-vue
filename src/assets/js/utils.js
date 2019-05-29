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
	},


	// 冒泡排序，，排json
	bubbleSort (arr, type, direction) {
		let len = arr.length;
		for (let i = 0; i < len - 1; i++) {
	        for(let j = 0; j < len - 1 - i;j ++) {
	            if (direction == 'up') {
					if(arr[j][type] > arr[j+1][type]) {
	                     [arr[j+1],arr[j]] = [arr[j],arr[j+1]]

	                }
				} else {
					if(arr[j][type] < arr[j+1][type]) {
	                     [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
	                }
				}
	        }
	    }
		return arr
	}
}