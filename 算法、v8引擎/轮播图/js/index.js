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
		// 获取$el的实际宽度
		this.$wid = this.$el.clientWidth
		// 获取图片列表
		this.$img = this.selector('img')
		this.init()
	}

	// 初始化
	init() {		
		this.$timer = setInterval(
			this.autoPlay.bind(this, true),
			this.$delay
		)
		this.moveOut()
		this.dynamicCreateMoveNode()
		this.dynamicCreatePaginationNode()
		this.paginationEvent()
	}

	// 自动轮播
	autoPlay(flag) {
		this.$list = this.$el.firstElementChild

		if(flag) {
			this.$index++
		}

		if(this.$index < 0){
			this.$index= (this.$img.length - 1)
		} else if(this.$index >= this.$img.length) {
			this.$index = 0
		}

		this.$list.style.left = (this.$index * - this.$wid) + 'px'
		this.$list.classList.add("animation")		
		this.selector('i').forEach((item, index) => {
			index === this.$index ? item.classList.add('active') : item.classList.remove('active')
		})
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
			let $i = document.createElement('i')		
			pagination.appendChild($i)
			i === this.$index ? $i.className = 'active circle' : $i.className = 'circle'
		}
		// 分页器居中
		setTimeout(()=> {
			let pageWid = pagination.clientWidth
			pagination.style.left = (this.$wid - pageWid) / 2 +'px'
		}, 30)
		this.$el.append(pagination)
	}

	// 上一页 下一页
	handleClick(el) {
		el.onclick = function(event){
			let e = event.target
			if(e.className == 'prev'){
				this.$index--
			} else {
				this.$index++
			}
			this.autoPlay()
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
					this.autoPlay.bind(this, true),
					this.$delay
				)
			}.bind(this)
		})
	}

	// 点击分页按钮
	paginationEvent() {
		let paginationbtn = this.selector('i')
		paginationbtn.forEach((item, index)=> {
			item.onclick = function() {
				this.$index = index
				this.autoPlay()
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