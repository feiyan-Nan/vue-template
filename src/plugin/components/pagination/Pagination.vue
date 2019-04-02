 <template lang="pug">
.ic__page
  .ic__page-pre.pointer(@click="pre" :class="[innerCurrPage===1? 'ic__page__disabled':'']")
    .ibass-arrow-left
    .ic__page-next-lagel 上一页
  ul.ic__page-wrap(v-for="(item, index) in pages" :key="index")
    li.ic__page-item.pointer( v-show="item.visible" :class="[(innerCurrPage===item.text)?'ic__page-item__active':'',item.text === filler.text?'ic__page__disabled':'']" @click="setCurrPage(item.text)") {{item.text}}
  .ic__page-next.pointer(@click="next" :class="[innerCurrPage===pageNum?'ic__page__disabled':'']")
    .ic__page-next-lagel 下一页
    .ibass-arrow-right
</template>
<script>
/**
 * totalCount: 总条数
 * pageSize: 每页显示条数
 * currPage: 当前页码，默认1
 * itemCount： 显示icon个数
 */
const FILLER = {text: '...', visible: true}
export default {
  name: 'ic-pagination',
  componentName: 'IcPagination',
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currPage: {
      type: Number,
      default: 1
    },
    itemCount: {
      type: Number,
      default: 9
    }
  },
  data () {
    return {
      filler: FILLER,
      innerCurrPage: this.currPage
    }
  },
  methods: {
    setCurrPage (text) {
      if (text === this.filler.text) return
      this.innerCurrPage = text
      this.$emit('change', this.innerCurrPage)
      window.parent.window.scrollTo(0, 0)
    },
    pre () {
      if (this.innerCurrPage === 1) return
      this.innerCurrPage -= 1
      this.$emit('change', this.innerCurrPage)
      window.parent.window.scrollTo(0, 0)
    },
    next () {
      if (this.innerCurrPage === this.pageNum) return
      this.innerCurrPage += 1
      this.$emit('change', this.innerCurrPage)
      window.parent.window.scrollTo(0, 0)
    }
  },
  computed: {
    pageNum () {
      return Math.ceil(this.totalCount / this.pageSize)
    },
    pages () {
      const result = []
      const innerCurrPage = this.innerCurrPage
      let page = {}
      for (let index = 1; index < this.pageNum + 1; index++) {
        page = {text: index, visible: this.pageNum < (this.itemCount + 1) || index === 1 || index === this.pageNum || Math.abs(innerCurrPage - index) <= Math.floor((this.itemCount - 4) / 2)}
        if (innerCurrPage - 1 < this.itemCount - 4 && index <= this.itemCount - 2)page.visible = true
        if (this.pageNum - innerCurrPage < this.itemCount - 4 && index > this.pageNum - this.itemCount + 2)page.visible = true
        result.push(page)
      }
      this.pageNum > this.itemCount && innerCurrPage > this.itemCount - 4 && result.splice(1, null, FILLER)
      this.pageNum > this.itemCount && innerCurrPage < result.length - this.itemCount + 4 && result.splice(result.length - 1, null, FILLER)
      return result
    }
  },
  watch: {
    currPage (newer, older) {
      this.innerCurrPage = newer
    }
  }
}
</script>
<style lang="scss" scoped>
.ic__page{
  @include flex(row,flex,center);
  @extend %f-small;
  color: $color-text-light;
  #{&}-item{
   @include flex(row,center,center);
    border-radius: 15px;
    height: 30px;
    width: 30px;
    &:hover:not(.ic__page-item__active):not(.ic__page__disabled){
      background-color: $color-bg-light;
      border-radius: 3px;
      color: $theme-color;
    }
  }
  #{&}-item__active{
      background-color: $theme-color-light;
      color: $color-white;
    }
  #{&}__disabled{
     cursor:not-allowed
    }
  #{&}-pre,#{&}-next{
    @include flex(row,flex-start,center);
    [class^=ibass]{
      @extend %f-giant;
      line-height: 16px;
    }
    .ibass-arrow-left{
      margin-right: 10px;
    }
    .ibass-arrow-right{
      margin-left: 10px;
    }
  }
  #{&}-pre{
    margin-right: 20px;
  }
  #{&}-next{
    margin-left: 20px;
  }
}
</style>
