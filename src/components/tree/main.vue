<template>
    <div>
        <div :style="rowStyle" class="line"> 
            <input type="text" v-model="text">
            <button @click="addChild" class="childnode-text">添加子节点</button>
            <button class="right-operate delete-text" @click="deleteChild">
                删除
            </button>
        </div>
        <TreeSub :children="folder[childrenStr]"
            :curLevel="curLevel"/>
    </div>
</template>

<script type="text/javascript">
	export default{
		props:{
			folder:{//显示对象
				type: Object,
				default: {}
			},
			childrenStr:{//子级字段名称
				type: String,
				default: 'childerNode'
			},
			curLevel:{//当前层级
				type:Number,
				default:1
            }
		},
		data () {
			return {
                text: '',
				rowStyle:{
                    paddingLeft: 0
                },
			}
		},
		beforeCreate: function () {
			this.$options.components.TreeSub = require('./sub.vue').default
		},
		mounted(){
            this.rowStyle.paddingLeft = `${(this.curLevel - 1) * 60}px`;
		},
		methods:{
            // 添加节点
			addChild(){
                
				if(!this.folder[this.childrenStr]){
					this.$set(this.folder,this.childrenStr,[])
                }
				this.folder[this.childrenStr].push({
					name: this.text
				})
            },
            
            // 删除节点
            deleteChild () {               
                this.$emit('deletes')
            },

		}
	}
</script>

<style lang="scss" scoped>
    .line {
        margin: 0 0 10px 0;
    }
    .right-operate {
        margin-left: 15px;
        padding-top: 2px;
        font-size: 12px;
        cursor: pointer;
    }
</style>