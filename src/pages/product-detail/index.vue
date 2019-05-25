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
			productObj: {}			// 存储数据
		}
	},
	created () {
		this.productObj = this.$route.query
		console.log(this.productObj)
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
}
</style>