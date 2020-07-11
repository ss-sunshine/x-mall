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
    <allLess></allLess>
  </div>
</template>

<script>
import AllLess from "../all/AllLess"
export default {
  name: "AllItem",
  props: {},
  components: {
    AllLess
  },
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
    clickItem(index) {
      this.num = index;
      if(this.num===1){
        this.list=this.list1
      }
      else if(this.num===2){
        this.list=this.list2
      }
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
    getSort() {
      let sort = 1;
      this.$api
        .getAllGoodsSort(this.page, this.size, sort)
        .then(res => {
          this.arr1 = res.data;
          console.log(this.arr1);
          if (this.arr1.length < this.size) {
            this.list1 = this.arr1;
          } else {
            this.list1 = this.arr1.slice(
              (this.page - 1) * this.size,
              this.page * this.size
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSortLess() {
      let sort = -1;
      this.$api
        .getAllGoodsSort(this.page, this.size, sort)
        .then(res => {
          this.arr2 = res.data;
          console.log(this.arr2);
          if (this.arr2.length < this.size) {
            this.list2 = this.arr2;
          } else {
            this.list2 = this.arr2.slice(
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
    //综合
    this.$api
      .getAllGoodsTwo({ page: this.page, size: this.size })
      .then(res => {
        this.arr = res.data;
        // console.log(this.arr);
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
    //升序
    this.getSort();
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