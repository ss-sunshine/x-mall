<template>
  <div>
    <div class="top f12 f-a">
      <!-- <div class="p-lr-15 T_item" @click="clickItem">综合排序</div>
      <div class="p-lr-15 T_item" @click="getSort">价格从低到高</div>
      <div class="p-lr-15 T_item" @click="getSortLess">价格从高到低</div>-->
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
      <div class="determine f-a-j" @click="getAll">确定</div>
    </div>
    <div class="content">
      <div class="f-a f-w">
        <div v-for="(item,index) in arr" :key="index" class="w25">
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
          @on-page-size-change="SizeChange"
          @on-change="PageChange"
          :total="total"
          size="small"
          show-elevator
          show-sizer
          :page-size="size"
          :current="page"
          :page-size-opts="[12,24,36]"
        />
        <!-- :total="30" -->
        <!-- :total="arr.length" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "AllItem",
  props: {},
  components: {},
  data() {
    return {
      top: ["综合排序", "价格从低到高", "价格从高到低"],
      arr: [],
      arr1: [],
      list: [],
      num: 0,
      number: "",
      priceGt: "",
      priceLte: "",
      size: 12,
      page: 1,
      id: "",
      sort: 1,
      flag: false,
      total: 0,
      value: ""
    };
  },
  methods: {
    detail(item) {
      // this.$router.push({
      //   path: "/detail",
      //   query: { productId: item.productId }
      // });

      //新窗口打开
      window.open("/detail?productId=" + item.productId);
    },
    leave(item, index) {
      this.number = "";
      this.id = "";
    },
    enter(item, index) {
      this.number = index;
      this.id = item.productId;
    },
    SizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.size = val;

      if (this.num === 0) {
        this.getAllGoods();
      }
      if (this.num === 1) {
        this.getSort();
      }
      if (this.num === 2) {
        this.getSortLess();
      }
    },
    PageChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      if (this.num === 0) {
        this.getAllGoods();
      }
      if (this.num === 1) {
        this.getSort();
      }
      if (this.num === 2) {
        this.getSortLess();
      }
    },
    clickItem(index) {
      this.num = index;
      // console.log(this.num);
      if (this.num === 0) {
        // this.reload()
        // this.num = 0
        this.getAllGoods();
      }
      if (this.num === 1) {
        this.getSort();
      }
      if (this.num === 2) {
        this.getSortLess();
      }
    },
    getAll() {
      if (this.priceGt === "" || this.priceLte === "") {
        this.getAllGoods();
        this.num = 0;
      } else {
        //综合
        this.$api
          .getAllGoods(
            this.page,
            this.size,
            this.sort,
            this.priceGt,
            this.priceLte
          )
          .then(res => {
            this.arr = res.data;
            if (this.$route.query.search) {
              this.arr = this.search;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
      this.flag = true;
    },
    getAllGoods() {
      if (
        this.priceGt === "" ||
        (this.priceLte === "" && !this.$route.query.value)
      ) {
        //综合
        this.$api
          .getAllGoodsTwo(this.page, this.size)
          .then(res => {
            this.arr = res.data;
            this.total = res.total;
            if (this.$route.query.value) {
              this.arr = JSON.parse(localStorage.getItem("search"));
              this.total = this.arr.length;
            }
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
      } else {
        this.getAll();
      }
    },
    getSort() {
      this.sort = 1;
      if (this.priceGt === "" || this.priceLte === "") {
        this.$api
          .getAllGoodsSort(this.page, this.size, this.sort)
          .then(res => {
            this.arr = res.data;
            if (this.$route.query.value) {
              let arr1 = JSON.parse(localStorage.getItem("search"));
              let list = this.arr.concat(arr1);
              let list1 = list.filter((item, index, array)=> {
                return array.indexOf(item) === index;
              });
              console.log(list);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.getAll();
      }
    },
    getSortLess() {
      this.sort = -1;
      if (this.priceGt === "" || this.priceLte === "") {
        this.$api
          .getAllGoodsSort(this.page, this.size, this.sort)
          .then(res => {
            this.arr = res.data;
            // if (this.$route.query.search) {
            //   let list = JSON.parse(localStorage.getItem("search"));
            //   this.arr = this.arr.filter(val => {
            //     return list.indexOf(val) > -1;
            //   });
            // }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.getAll();
      }
    }
  },
  mounted() {
    this.getAllGoods();
    this.value = this.$route.query.value;
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