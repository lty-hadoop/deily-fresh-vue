window.onload = function() {
	new Carousel({
		el: '#carousel',
		delay: '3000'
	})
}


// 轮播图
class Carousel {
	constructor(options) {
		this.$options = options
		this.$timer = null
		this.$index = 0
		this.$list = null
		// 初始化dom元素
		this.$el = this.selector(this.$el ? this.$el : '#carousel')
		// 延时时间
		this.$delay = this.$options.delay || '3000'
		this.init()		
	}

	// 初始化
	init() {	
		this.$img = this.selector('img')
		this.$timer = setInterval(
			this.autoPlay.bind(this),
			this.$delay
		)
		this.moveOut()
		this.createMoveNode()
	}

	// 自动轮播
	autoPlay() {
		this.$list = this.$el.firstElementChild
		this.$index++
		if(this.$index >= 6) this.$index = 0
		this.$list.style.left = (this.$index * -680) + 'px'
		this.$list.classList.add("animation")
	}

	// 动态生成上一页，下一页节点
	createMoveNode() {
		let filpOver = document.createElement('div')
		filpOver.className = 'flip-over'

		let span = `
			<span class="prev"></span>
			<span class="next"></span>
		`
		filpOver.innerHTML = span
		this.$el.append(filpOver)
		this.handleClick(filpOver)
	}

	// 上一页 下一页
	handleClick(el) {
		el.onclick = function(event){
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
		if(!!ele && ele.indexOf('.') !== -1 || !!ele && ele.indexOf('#') !== -1) {
            return document.querySelector(ele)
        } else {
            return document.querySelectorAll(ele)
        }
	}

}