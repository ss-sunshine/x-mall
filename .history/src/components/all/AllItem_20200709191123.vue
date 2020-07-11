<template>
  <div>
    <div class="top f12 f-a">
      <div class="p-lr-15 T_item" @click="clickItem">综合排序</div>
      <div class="p-lr-15 T_item" @click="getSort">价格从低到高</div>
      <div class="p-lr-15 T_item" @click="getSortLess">价格从高到低</div>
      <!-- <div v-for="(item,index) in top" :key="index">
        <div
          class="p-lr-15 T_item"
          @click="clickItem(index)"
          :class="{'T_item_hover':num===index}"
        >{{item}}</div>
      </div>-->
      <div class="p-lr-15 f-a">
        <input type="number" class="ipt f-a-j" v-model="priceGt" placeholder="价格" />
        <div class="less">-</div>
        <input type="number" class="ipt f-a-j" v-model="priceLte" placeholder="价格" />
      </div>
      <div class="determine f-a-j">确定</div>
    </div>
    <div class="content">
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
          :total="sum"
          size="small"
          show-elevator
          show-sizer
          :page-size="size"
          :current="page"
          :page-size-opts="[10,20,30]"
        />
      </div>
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
      list: [],
      arr1: [],
      list1: [],
      arr2: [],
      list2: [],
      num: 0,
      number: "",
      priceGt: "",
      priceLte: "",
      size: 10,
      page: 1,
      id: "",
      sort: "",
      sum:''
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
    clickItem() {
      this.getAllGoods();
    },
    // clickItem(index) {
    //   this.num = index;
    //   console.log(this.num);
    //   if (this.num === 0) {
    //     this.getAllGoods();
    //   }
    //   if (this.num === 1) {
    //     this.getSort();
    //   }
    //   if (this.num === 2) {
    //     this.getSortLess();
    //   }
    // },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.size = val;
      this.getAllGoods();
      if (this.num === 2) {
        this.getSortLess();
      }
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getAllGoods();
      if (this.num === 2) {
        this.getSortLess();
      }
    },
    getAllGoods() {
      //综合
      this.$api
        .getAllGoodsTwo(this.page, this.size)
        .then(res => {
          this.arr = res.data;
          this.sum = res.total
          // console.log(this.arr);
          if (this.sum < this.size) {
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
    },
    getSort() {
      this.sort = 1;
      this.$api
        .getAllGoodsSort(this.page, this.size, this.sort)
        .then(res => {
          this.arr = res.data;
          // console.log(this.arr);
          // if (this.arr.length < this.size) {
          //   this.list = this.arr;
          // } else {
          //   this.list = this.arr.slice(
          //     (this.page - 1) * this.size,
          //     this.page * this.size
          //   );
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSortLess() {
      this.sort = -1;
      this.$api
        .getAllGoodsSort(this.page, this.size, this.sort)
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
          // if (this.arr.length < this.size) {
          //   this.list = this.arr;
          // } else {
          //   this.list = this.arr.slice(
          //     (this.page - 1) * this.size,
          //     this.page * this.size
          //   );
          // }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAllGoods();
    // //升序
    // this.getSort();
    // // //降序
    // this.getSortLess();
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