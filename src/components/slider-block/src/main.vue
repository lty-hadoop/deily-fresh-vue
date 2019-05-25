<template>
	<div class="slider-wrap">
		<div class="nc_scale" ref="ncScale">
			<!-- 滑块 -->
			<span class="btn_slide" ref="btnSlide"
				@touchstart="touchStart"
				@touchmove="touchMove">
				</span>

			<!-- 文字 -->
			<div class="scale_text" ref="scaleText">向右滑动验证</div>

			<!-- 背景 -->
			<div class="bg" :style="sliderBg"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SlideBlock',
		data () {
			return {
				downX: '',			// 记录按钮的位置
				moveX: '',
				sliderBg: '',		// 背景的样式
				btnSlide: ''		// 按钮的$el
			}
		},
		mounted () {
			this.btnSlide = this.$refs.btnSlide
			this.btnSlide.addEventListener('touchend', this.moseUpFn)
		},
		methods: {
			touchStart (e) {
				// 等于1时表示此时有只有一只手指在触摸屏幕
				if (e.touches[0].length == 1) {
					this.downX = e.touches[0].clientX
				}
			},

			touchMove (e) {
				let ncScale = this.$refs.ncScale 					// 滑动条的el
				let scaleText = this.$refs.scaleText 			// 文本的el

				this.moveX = e.touches[0].clientX - this.downX

				// 如果向左滑
				if (this.moveX < 0 || this.moveX == 0) {
					this.sliderBg = `width: 0`
				} else if (this.moveX > 0) {
					this.btnSlide.style = `transform: translateX(${this.moveX}px)`
					this.sliderBg = `width: ${this.moveX}px`
				
					let maxWidth = ncScale.offsetWidth - this.btnSlide.offsetWidth		// 获取最大的滑动宽度
					if (this.moveX >= (maxWidth)) {
						this.btnSlide.style = `transform: translateX(${maxWidth}px)`
						this.sliderBg = `width: ${maxWidth}px`
						scaleText.innerHTML = '通过验证'
						this.$emit('passVerify')
					}
				} 
			},

			moseUpFn () {
				setTimeout(()=>{
					this.sliderBg = `width: 0`
					this.btnSlide.style = `transform: translateX(0)`
				},500)
			}
		}
	}
</script>

<style scoped lang="scss">
	.slider-wrap {
		padding: 20px;
		.nc_scale {
			position: relative;
			width: 100%;
			height: 104px;
			background: #e8e8e8;
			margin: 0;
			padding: 0;
			.btn_slide {
				text-align: center;
				width: 104px;
				height: 104px;
				line-height: 104px;
				border: 1px solid #ccc; /*no*/
				position: absolute;
				left: 0;
				cursor: move;
				background: #fff;
				z-index: 2;
				&::before {
					content: "";
					display: block;
					width: 64px;
					height: 64px;
					margin: 16px auto 0;
					background: url('../img/slider.png') no-repeat;
					background-size: contain;
				}
			}
			.scale_text {
				width: 100%;
				text-align: center;
				position: absolute;
				z-index: 1;
				height: 104px;
				line-height: 104px;
				font-size: $font16; /*no*/
				cursor: pointer;
				background: -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, white), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				animation: slidetounlock 3s infinite;
			}
			.bg {
				position: absolute;
				width: 0px;
				height: 100%;
				background: #7ac23c;
			}
		}
	}

	@keyframes slidetounlock {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: 200px 0;
		}
	}
</style>