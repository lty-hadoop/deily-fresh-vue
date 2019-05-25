<template>
   <div class="home-view">
        <div class="header">
            <div class="header-left">
                <span class="address">闵行区芦恒路2159弄27号</span>    
            </div>
            <div class="header-right">
                <div class="search-nav">
                    <div class="icon iconfont iconweibiaoti-"></div>
                    <div class="search-nav-text">小龙虾</div>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="banner-img"></div>
            <div class="product-list-item-wrap" v-for="(item, index) in product" :key="index" @click="toDetail(item)">
                <div class="product-item-container">
                    <div class="product-item">
                        <div class="item-image">
                            <img class="x-img" :src="item.url" />
                        </div>
                        <div class="item-detail">
                            <div class="item-title">
                                <p class="sub-title">{{item.title}}</p>
                                <p class="mess-title">{{item.subTitle}}</p>
                            </div>
                            <div class="item-tag">
                                <span class="product-item-tag">新人专享</span>
                            </div>
                            <div class="item-bottom">
                                <div class="item-price">
                                    <span>￥</span>
                                    <span class="price">{{item.price}}</span>
                                    <span class="has-line-through">
                                        ￥{{item.oldPrice}}
                                    </span>
                                </div>
                                <div class="product-item-cart" @click="appendCar">
                                    <span class="car-icon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Tabs />
    </div>
</template>

<script>
export default {
    data () {
        return {
            product: [
                {
                    "id": 34975,
                    "url": require('./images/1.jpg'),
                    "title": "进口香蕉1袋500g起「新人特惠」",
                    "subTitle": "跟鲜花一起运过来的香蕉",
                    "price": 6.3,
                    "oldPrice": 12.9
                },
                {
                    "id": 34785,
                    "url": require('./images/2.jpg'),
                    "title": "妃子笑荔枝500g「新人特惠」",
                    "subTitle": "妃子笑嘻嘻，吃了好甜蜜",
                    "price": 9.9,
                    "oldPrice": 26.9
                },
                {
                    "id": 23486,
                    "url": require('./images/3.jpg'),
                    "title": "千禧圣女果1盒500g「新人特惠」",
                    "subTitle": "90斤女孩的饭后小甜点",
                    "price": 6.3,
                    "oldPrice": 12.9
                }
            ]
        }
	},
	methods: {
        // 跳转到详情
		toDetail (data) {
			this.$router.push({
                path: '/product-detail',
                query: data
            })
		},

        // 添加到购物车
        appendCar (e) {
            e.stopPropagation()     // 阻止冒泡，，可以用@click.stop
            console.log('添加到购物车')
        }
	}
}
</script>

<style scoped lang="scss">
.home-view {
	.header {
        position: fixed;
        left: 0;
        top: 0;
        width:100%;
        display: flex;
        padding: 10px 20px;
        background: #fff;
        z-index: 2;
        .header-left {
            flex: 0 0 50%;
            align-items: center;
            font-size: 16px;	/*no*/
            .address {
                display: block;
                max-width: 300px;
                line-height: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .header-right {
            flex: 0 0 50%;
            .search-nav {
                display: flex;
                margin-right: 10px;
                height: 60px;
                line-height: 60px;
                background: #f5f5f5;
                border-radius: 128px;
                .icon {
                    margin-left: 30px;
                    font-size: 20px;	/*no*/
                }
                .search-nav-text {
                    margin-left: 10px;
                    color: #c6c6c6;
                }
            }
        }
    }

    /* 内容区域 */
    .main {
        position: relative;
        left: 0;
        top: 70px;
        margin: 20px 0 100px;
        background: #fff;
        overflow: auto;
        z-index: 1;
        .banner-img {
            width: 100%;
            height: 190px;
            background: url('./images/adv.png') no-repeat;
            background-size: cover;
        }
        .product-list-item-wrap {
            .product-item-container {
                padding: 0 20px;
                .product-item {
                    display: flex;
                    width: 100%;
                    flex-direction: row;             
                    justify-content: space-between;
                    flex: 1 1 0;
                    position: relative;
                    box-sizing: border-box;
                    padding: 40px 0;
                    border-bottom: 1px solid #f5f5f5;	/*no*/
                    .item-image {
                        width: 240px;
                        height: 240px;
                        margin-left: 10px;
                        margin-right: 30px;
                        .x-img {
                            transition: opacity 500ms ease-in-out;
                            max-width: 100%;
                        }
                    }
                    .item-detail {
                        flex: 1;
                        .item-title {
                            margin-top: 10px;
                            p {
                                width: 400px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                            .sub-title {
                                font-size: 16px;	/*no*/
                                color: #474245;
                            }
                            .mess-title {
                                font-size: 14px;	/*no*/
                                color: #969696;
                            }
                        }
                        .item-tag {
                            margin-bottom: 40px;
                            .product-item-tag {
                                display: inline-block;
                                border-radius: 8px;
                                font-size: 12px;	/*no*/
                                border: 1px solid #c6c6c6;	/*no*/
                                margin-right: 10px;
                                margin-top: 10px;
                                padding: 2px 4px;
                                border-color: $mainColor;
                                color: $mainColor;
                            }
                        }

                        .item-bottom {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin-bottom: 20px;
                            .item-price {
                                color: $mainColor;
                                .price {
                                    font-size: 16px;	/*no*/
                                    letter-spacing: -2px;
                                    display: inline;
                                    vertical-align: baseline;
                                    margin-left: -4px;
                                }
                                .has-line-through {
                                    display: inline-block;
                                    text-decoration: line-through;
                                    margin-left: 8px;
                                    color: #969696;
                                    font-size: 12px;	/*no*/
                                }
                            }
                            .product-item-cart {
                                .car-icon {
                                    display: inline-block;
                                    width: 90px;
                                    height: 90px;
                                    background: url('./images/car.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

