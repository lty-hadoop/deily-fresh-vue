window.onload = function() {
	new Carousel({
		el: '#carousel',
		delay: 3000
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
		this.$delay = this.$options.delay || 3000
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
		this.dynamicCreateMoveNode()
		this.dynamicCreatePaginationNode()
	}

	// 自动轮播
	autoPlay() {
		this.$list = this.$el.firstElementChild
		this.$index++
		if(this.$index >= this.$img.length) this.$index = 0
		this.$list.style.left = (this.$index * - 680) + 'px'
		this.$list.classList.add("animation")
		this.addStyle()
	}

	// 动态生成上一页，下一页节点
	dynamicCreateMoveNode() {
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

	// 动态生成分页器
	dynamicCreatePaginationNode() {
		let pagination = document.createElement('div')
		pagination.className = 'pagination'
		
		for(let i = 0; i < this.$img.length; i++) {
			let i = document.createElement('i')
			i.className = 'circle'
			pagination.appendChild(i)
		}
		pagination.style.left = (680-76) / 2 +'px'
		this.$el.append(pagination)
	}

	// 分页器加样式
	addStyle() {
		// console.log(this.$index)
		// let paginationCircle = this.selector('i')
		// paginationCircle.forEach((item,index) => {
		// 	console.log(item)
		// })
	}

	// 上一页 下一页
	handleClick(el) {
		el.onclick = function(event){
			let e = event.target
			if(e.className == 'prev'){
				this.$index--
	            if(this.$index<0){this.$index= (this.$img.length - 1)};
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