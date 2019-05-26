<template>
	<div class="car-wrap">
		<div class="no-product">
			<div class="car-icon"></div>
			<p class="empty-text">您还没有添加任何商品</p>
		</div>
		<Tabs />
	</div>
</template>

<script>
	
</script>

<style scoped lang="scss">
	.car-wrap {
		width: 100%;
		background:$white;
		.no-product {
			padding-top: 324px;
			text-align: center;
			.car-icon {
				width: 180px;
				height: 180px;
				margin: 0 auto;
				background: url('./images/car.png') no-repeat;
				background-size: cover; 
			}
			.empty-text {
				padding: 20px 0 40px 0;
				color: #7f7f7f;
				font-size: $font14;	/*no*/
			}
		}
	}
</style>