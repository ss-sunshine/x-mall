<template>
  <div>
    <div class="top f12 f-a">
      <div v-for="(item,index) in top" :key="index">
        <div class="p-lr-15 T_item" @click="clickItem(index)" :class="{'T_item_hover':num===index}">{{item}}</div>
      </div>
      <div class="p-lr-15 f-a">
          <input type="number" class="ipt f-a-j" v-model="priceGt" placeholder="价格">
          <div class="less"> - </div>
          <input type="number" class="ipt f-a-j" v-model="priceLte" placeholder="价格">
      </div>
      <div class="determine f-a-j">确定</div>
    </div>
    <div class="content">
        <Page :total="40" size="small" show-elevator show-sizer />
    </div>
  </div>
</template>

<script>
export default {
  name: "AllItem",
  props: {},
  components: {},
  data() {
    return {
      top: ["综合排序", "价格从低到高", "价格从高到低"],
      num:0,
      priceGt:'',
      priceLte:''
    };
  },
  methods: {
      clickItem(index){
          this.num = index
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/All"
</style>