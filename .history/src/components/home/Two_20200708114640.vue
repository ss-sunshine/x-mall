<template>
  <div class="m-tb-3">
    <topTitle>
      <template v-slot:title>热门商品</template>
    </topTitle>
    <div class="box f-aj-around">
      <div v-for="(item,index) in hot" :key="index">
        <div class="f-1">
          <div class="H_item f-c-a-j">
            <img :src="item.picUrl" alt />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="f18 f-w-7 salePrice m-t-1">{{item.salePrice|fixed}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle";
export default {
  name: "Two",
  props: {
    hot: {
      type: Array
    }
  },
  components: {
    TopTitle
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Two";
</style>