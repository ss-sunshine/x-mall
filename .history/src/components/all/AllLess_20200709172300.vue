<template>
  <div>
      <div class="f-a f-w">
        <div v-for="(item,index) in list" :key="index" class="w25">
          <div
            class="banner1 f-1 f-c-a-j"
            @mouseenter="enter(item,index)"
            @mouseleave="leave(item,index)"
            @click="detail(item)"
            :class="{'H_item_hover':number===index}"
          >
            <img :src="item.productImageBig" alt class="image2" />
            <div class="f16 productName">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div class="f-w-7 f18 salePrice" v-if="id!==item.productId">{{item.salePrice|fixed}}</div>
              <div class="d-f" v-if="id===item.productId">
                <div class="f12 btn1 f-a-j" @click="detail(item)">查看详情</div>
                <div class="f12 btn f-a-j f-color-w">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Page f-a">
        <div class="f12 m-r-1">
          <span>共</span>
          <span class="num">{{arr.length}}</span>
          <span>条</span>
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
          :page-size-opts="[10,20,30]"
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
      arr: [],
      list: [],
      arr1: [],
      number: "",
      priceGt: "",
      priceLte: "",
      size: 10,
      page: 1,
      id: "",
    };
  },
  methods: {
    detail(item) {
      this.$router.push({
        path: "/detail",
        query: { productId: item.productId }
      });
    },
    leave(item, index) {
      this.number = "";
      this.id = "";
    },
    enter(item, index) {
      this.number = index;
      this.id = item.productId;
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.size = val;
      this.list = this.arr.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.list = this.arr.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
    },
    getSortLess() {
      let sort = -1;
      this.$api
        .getAllGoodsSort(this.page, this.size, sort)
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
          if (this.arr.length < this.size) {
            this.list = this.arr;
          } else {
            this.list = this.arr.slice(
              (this.page - 1) * this.size,
              this.page * this.size
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    //降序
    this.getSortLess();
  },
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
@import "../../style/All";
</style>