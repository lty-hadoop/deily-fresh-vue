<!-- 城市级联 -->
<template>
    <div class="cascade">
        <input type="text" v-model="allName" readonly class="input-style" @click.stop="handleClick">
        <ul class="identical-select first-other" v-show="showFirstSelect">
            <li v-for="(item, index) in firstData" :key="index" @click.stop="firstSelect(item)">
                {{item.ssqname}}
            </li>
        </ul>
        <ul class="identical-select second-other" v-show="showSecondSelect">
            <li v-for="(item, index) in secondData" :key="index" @click.stop="secondSelect(item)">
                {{item.ssqname}}
            </li>
        </ul>
        <ul class="identical-select three-other" v-show="showThreeSelect">
            <li v-for="(item, index) in threeData" :key="index"  @click.stop="threeSelect(item)">
                {{item.ssqname}}
            </li>
        </ul>
    </div>
</template>

<script>
import cityData from '../js/city.js'
export default {
    name: 'Cascade',
    data () {
        return {
            firstData: [],
            secondData: [],
            threeData: [],
            showFirstSelect: false,
            showSecondSelect: false,
            showThreeSelect: false,
            firstName: '',
            secondName: '',
            threeName: '',
            allName: ''
        }
    },
    mounted () { 
        document.addEventListener('click', this.listenGlobalEven)
    },
    destroyed () {
        document.removeEventListener('click', this.listenGlobalEven)
    },
    methods: {
        // 点击input框
        handleClick () {
            this.firstData = cityData.province
            this.showFirstSelect = true
        },

        // 监听global
        listenGlobalEven () {
            this.showFirstSelect = false
            this.showSecondSelect = false
            this.showThreeSelect = false
        },

        // 点击第一列的数据
        firstSelect (data) {
            this.showSecondSelect = true
            this.secondData = data.cities.city
            this.firstName = data.ssqname
        },

        // 点击第二列的数据
        secondSelect (data) {
            this.showThreeSelect = true
            this.threeData = data.areas.area
            this.secondName = data.ssqname
        },

        // 点击第三列的数据
        threeSelect (data) {
            this.threeName = data.ssqname
            this.listenGlobalEven()
            this.allName = this.firstName + '/' + this.secondName + '/' + this.threeName
        }
    },
    // computed: {
    //     allName () {
    //         return this.firstName + '/' + this.secondName + '/' + this.threeName
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    $gray: #e8e0e0;
    .cascade {
        position: relative;
        left: 0;
        top: 0;
        .input-style {
            width: 100%;
            height: 70px;
            line-height: 70px;
            padding: 0 10px;
            border: 1px solid $gray;
            border-radius: 20px;
            font-size: $font16; /*no*/
            outline: none;
            &:focus {
                border: 1px solid #00c0ff;  /*no*/
            }
        }

        // 下拉选择
        .identical-select {
            width: 33%;
            height: 400px;
            padding: 0 0 40px;
            border: 1px solid $gray;    /*no*/
            text-align: center;
            overflow: auto;
            font-size: $font14; /*no*/
            li {
                height: 70px;
                line-height: 70px;
                border-top: 1px solid $gray;    /*no*/
                cursor: pointer;
                color: #3c3a3a;
            }
        }
        .first-other {
            position: absolute;
            left: 0;
            top: 70px;
        }
        .second-other {
            position: absolute;
            left: 33%;
            top: 70px;
        }
        .three-other {
            position: absolute;
            left: 33% * 2;
            top: 70px;
        }
    }
    .identical-select::-webkit-scrollbar {/*滚动条整体样式*/
        width: 20px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 2px;
    }
    .identical-select::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 20px;
        box-shadow: inset 0 0 10px $gray;
        background: #c7c3c3;
    }
    .identical-select::-webkit-scrollbar-track {/*滚动条里面轨道*/
        box-shadow: inset 0 0 10px $gray;
        border-radius: 20px;
        background: #EDEDED;
    }
</style>