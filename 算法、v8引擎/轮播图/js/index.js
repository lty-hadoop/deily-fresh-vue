window.onload = function() {
	new Carousel({
		el: '.carousel-wrap',
		delay: '3000'
	})
}


// 轮播图
class Carousel {
	constructor(options) {
		this.$options = options
		this.$timer = null
		this.$index = 0
		// 初始化dom元素
		this.$list = this.selector(this.$el ? this.$el : '.carousel-wrap')
		// 获取上下页的dom节点
		this.$flipOver = this.selector('.flip-over')
		// 延时时间
		this.$delay = this.$options.delay || '3000'
		this.init()
		this.moveOut()
		this.handleClick()
	}

	// 初始化
	init() {	
		this.$img = this.selector('img')
		this.$timer = setInterval(
			this.autoPlay.bind(this),
			this.$delay
		)
	}

	// 自动轮播
	autoPlay() {
		this.$index++
		if(this.$index >= 6) {
			this.$index = 0
		} else {
			this.$list.style.left = (this.$index * -680) + 'px'
			this.$list.classList.add("animation")
		}
	}

	// 上一页 下一页
	handleClick() {
		this.$flipOver.onclick = function(event){
			let e = event.target
			if(e.className == 'prev'){
				this.$index--
	            if(this.$index<0){this.$index=5};
	            this.$list.style.left = (this.$index * - 680) + 'px'
			} else {
				this.autoPlay()
			}
		}.bind(this)
	}

	// 移入移出
	moveOut() {
		this.$img.forEach((item) => {
			item.onmouseover = function(){
				clearInterval(this.$timer)
			}.bind(this)

			item.onmouseout = function(){
				this.$timer = setInterval(
					this.autoPlay.bind(this),
					this.$delay
				)
			}.bind(this)
		})
	}

	// 选择器
	selector(ele) {
		if(!!ele && ele.indexOf('.') !== -1) {
            return document.querySelector(ele)
        } else {
            return document.querySelectorAll(ele)
        }
	}

}