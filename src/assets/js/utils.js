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

	// 千位数金额
    toThounds() {
        var num = Array.prototype.slice.call(arguments).toString().split(''),
            result = [ ], counter = 0; 
        for (var i = num.length - 1; i >= 0; i--) {
            counter++
            result.unshift(num[i])
            if(!(counter %3) && i != 0) result.unshift(',')
        }
        return result.join('')
    },

    // 冒泡排序，，排json
	bubbleSort () {
        var arg = Array.prototype.slice.call(arguments);
        var arr = arg[0],
            type = arg[1],
            direction = arg[2];
        
        for (let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i;j ++) {
                var arrJ = Number(arr[j][type]),
                    arrJ2 = Number(arr[j+1][type]);
                if (direction == 'up') {
                    if(arrJ > arrJ2) {
                        [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                    }
                } else {
                    if(arrJ < arrJ2) {
                        [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                    }
                }
            }
        }
        return arr
    }
}