<template>
  <div>
    <div class="top f12 f-a">
      <div v-for="(item,index) in top" :key="index">
        <div class="p-lr-15 T_item" @click="clickItem(index)" :class="{'T_item_hover':num===index}">{{item}}</div>
      </div>
      <input type="number" class="ipt f-j" v-model="price" placeholder="价格">
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
      price:''
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