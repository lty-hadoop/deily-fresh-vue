<template>
    <div class="input-wrap">
        <input type="text" class="input-style" v-model="searchText" placeholder="函数防抖">
        <div class="list">11</div>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data () {
        return {
            searchText: ''
        }
    },
    created() {
        this.$watch('searchText', this.$utils.debounce((newSearchText) => {
            this.getData(newSearchText)
        }, 800))
    },
    methods: { 
        // 获取百度接口
        getData (newSearchText) {
            this.$axios.get('/apis', {
                params: {
                    text: newSearchText
                }
            }).then(res => {
                console.log(res)
            })
        }

    }
}
</script>

<style lang="scss" scoped>
$gray: #e8e0e0;
.input-wrap {
    position: relative;
    .input-style {
        height: 28px;
        line-height: 28px;
        padding: 0 5px;
        border: 1px solid $gray;
        border-radius: 5px;
        outline: none;
        &:focus {
            border: 1px solid #00c0ff;
        }
    }
    .list {
        display: none;
        position: absolute;
        left: 0;
        top: 30px;
        width: 178px;
        font-size: 12px;
        border-top: 0;
        border: 1px solid $gray;
    }
}

</style>

