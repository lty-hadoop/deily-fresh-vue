<template>
	<div class="detail-wrap">
		<Navbar title="商品详情"></Navbar>
		<div class="detail-contain">
			<div class="swiper-box">
				<swiper :options="swiperOption">
					<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
						<img :src="slide.url" alt="" class="img-style">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>

			<div class="product-describe">
				<div class="product-describe-title">{{productObj.title}}</div>
				<div class="product-detail-name">{{productObj.subTitle}}</div>
				<div class="product-detail-price">
					<div class="price-left price">￥{{productObj.price}}</div>
					<div class="price-right">已售604451份</div>
				</div>
				<div class="product-attrs">
					<div class="image-text-container">
						<span class="promotion-img"></span>
						<div class="image-text">
							产地<span>中国</span>
						</div>
					</div>
					<div class="image-text-container">
						<span class="promotion-img"></span>
						<div class="image-text">
							1小时送达
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 底部加入购物车 -->
		<div class="footer-product-car">
			<div class="car-left">
				<i class="icon iconfont">&#xe62d;</i>
				<span class="image-spot-dot" v-if="count" @click="toCar">{{count}}</span>
			</div>
			<div class="add-cart-btn" @click="addCar">加入购物车</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				}
			},
			swiperSlides: [
				{"url": require('./images/1.jpg')},
				{"url": require('./images/2.jpg')},
				{"url": require('./images/3.jpg')},
				{"url": require('./images/4.jpg')},
				{"url": require('./images/5.jpg')}
			],
			productObj: {},			// 存储数据
			count: 0
		}
	},
	created () {
		this.productObj = this.$route.query
	},
	methods: {
		// 加入购物车
		addCar () {
			this.count++
		},

		// 跳转至购物车
		toCar () {
			console.log(this.count)
		}
	}
}
</script>

<style scoped lang="scss">
.detail-wrap {
	width:100%;
	.detail-contain {
		margin-top: 90px;
		.swiper-box {
			width: 100%;
			.img-style {
				width: 100%;
				height: 500px;
			}
		}

		.product-describe {
			box-sizing: border-box;
			padding: 28px 30px 0;
			background: #fff;
			.product-describe-title {
				font-size: $font18;	/*no*/
				color: #474245;
				font-weight: 700;
			}
			.product-detail-name {
				padding: 4px 0 28px;
				font-size: $font16;	/*no*/
				color: #474245;
			}
			.product-detail-price {
				display: flex;
				justify-content: space-between;
				padding-bottom: 12px;
				font-size: $font14;	/*no*/
				.price {
					color: #ff4891;
					font-weight: bold;
				}
				.price-right {
					color: #969696;
				}
			}
			.product-attrs {
				display: flex;
				margin-top: 22px;
				border-top: 1px solid #f5f5f5;	/*no*/
				padding: 24px 0;
				overflow: hidden;
				.image-text-container {
					display: flex;
					align-items: center;
					padding-right: 40px;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #262626;
					font-size: $font12;	/*no*/
					overflow: hidden;
					.promotion-img {
						height: 6px;
						width: 6px;
						margin-top: 4px;
						border-radius: 50%;
						background: #474245;
					}
					.image-text {
						padding-left: 10px;
						letter-spacing: 2px;
					}
				}
			}
		}
	}

	.footer-product-car {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 92px;
		line-height: 92px;
		box-shadow: 0 4px 4px #e5e5e5;
		background: $white;
		z-index: 2;
		.car-left {
			position: relative;
			width: 118px;		
			text-align: center;
			.icon {
				font-size: 30px;	/*no*/
			}
			.image-spot-dot {
				position: absolute;
				right: 6px;
				top: 2px;
				padding: 8px;
				line-height: 1;
				min-width: 40px;
				border-radius: 50%;
				background: #ff4891;
				color: $white;
				font-size: $font12;	/*no*/
			}
		}
		.add-cart-btn {
			width: 100%;
			background: #ff4891;
			text-align: center;
			color: $white;
			font-size: $font18;	/*no*/
			letter-spacing: 1px;
		}
	}
}
</style>