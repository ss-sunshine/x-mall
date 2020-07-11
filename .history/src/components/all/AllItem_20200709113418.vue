<template>
  <div>
    <div class="top f12 f-a">
      <div v-for="(item,index) in top" :key="index">
        <div
          class="p-lr-15 T_item"
          @click="clickItem(index)"
          :class="{'T_item_hover':num===index}"
        >{{item}}</div>
      </div>
      <div class="p-lr-15 f-a">
        <input type="number" class="ipt f-a-j" v-model="priceGt" placeholder="价格" />
        <div class="less">-</div>
        <input type="number" class="ipt f-a-j" v-model="priceLte" placeholder="价格" />
      </div>
      <div class="determine f-a-j">确定</div>
    </div>
    <div class="content">
      <Page
        @on-page-size-change="handleSizeChange"
        @on-change="handleCurrentChange"
        :total="40"
        size="small"
        show-elevator
        show-sizer
        :page-size="size"
        :current="page"
      />
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
      num: 0,
      priceGt: "",
      priceLte: "",
      size: 10,
      page: 1
    };
  },
  methods: {
    clickItem(index) {
      this.num = index;
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
  },
  mounted() {
      this.$api.getAllGoods(this.page,this.size).then(res=>{
        //   console.log(res);
      }).catch(err=>{
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/All";
</style>