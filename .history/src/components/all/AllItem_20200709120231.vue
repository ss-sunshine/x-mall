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
      <div>
        <div v-for="(item,index) in arr" :key="index" class="f-1">
          <div
            class="banner1 f-1 f-c-a-j"
            @mouseenter="enter(item,index)"
            @mouseleave="leave(item,index)"
            @click="detail(item)"
            :class="{'H_item_left':index===0,'H_item_right':index===3,'H_item_hover':num===index}"
          >
            <img :src="item.productImageBig" alt class="image2" />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div class="f-w-7 f18 salePrice" v-if="id!==item.id">{{item.salePrice|fixed}}</div>
              <div class="d-f" v-if="id===item.id">
                <div class="f12 btn1 f-a-j" @click="detail(item)">查看详情</div>
                <div class="f12 btn f-a-j f-color-w">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page
        @on-page-size-change="handleSizeChange"
        @on-change="handleCurrentChange"
        :total="arr.length"
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
      arr: [],
      num: 0,
      priceGt: "",
      priceLte: "",
      size: 10,
      page: 1,
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
    }
  },
  mounted() {
    this.$api
      .getAllGoodsTwo({ page: this.page, size: this.size })
      .then(res => {
        this.arr = res.data;
        console.log(this.arr);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/All";
</style>