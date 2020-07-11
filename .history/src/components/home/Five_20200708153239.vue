<template>
  <div class="m-b-3">
    <topTitle>
      <template v-slot:title>品牌精选</template>
    </topTitle>
    <div class="box">
      <div class="d-f top">
        <div v-for="(item,index) in brandTwo.slice(0,3)" :key="index" class="f-1">
          <div v-if="index===0" class="p-r">
            <img :src="item.picUrl" alt class="image1" />
            <a class="cover-link"></a>
          </div>
          <div v-if="index!==0" class="f-1">
            <div
              class="banner1 f-1 f-c-a-j"
              @mouseenter="enter1(item,index)"
              @mouseleave="leave1(item,index)"
              :class="{'H_item_hover':number===index}"
            >
              <img :src="item.picUrl" alt class="image2" />
              <div class="f16">{{item.productName}}</div>
              <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
              <div class="m-t-1 f-c-a">
                <div class="f-w-7 f18 salePrice" v-if="id!==item.id">{{item.salePrice|fixed}}</div>
                <div class="d-f" v-if="id===item.id">
                  <div class="f12 btn1 f-a-j">查看详情</div>
                  <div class="f12 btn f-a-j f-color-w">加入购物车</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-f">
        <div v-for="(item,index) in brandTwo.slice(3)" :key="index" class="f-1">
          <div
            class="banner1 f-1 f-c-a-j"
            @mouseenter="enter(item,index)"
            @mouseleave="leave(item,index)"
            :class="{'H_item_left':index===0,'H_item_right':index===3,'H_item_hover':num===index}"
          >
            <img :src="item.picUrl" alt class="image2" />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div class="f-w-7 f18 salePrice"  v-if="id!==item.id">{{item.salePrice|fixed}}</div>
              <div class="d-f" v-if="id===item.id">
                <div class="f12 btn1 f-a-j">查看详情</div>
                <div class="f12 btn f-a-j f-color-w">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle";
export default {
  name: "Five",
  props: {
    brandTwo: {
      type: Array
    }
  },
  components: {
    TopTitle
  },
  data() {
    return {
      flag: false,
      num: "",
      number: "",
      id:'',

    };
  },
  methods: {
    leave1(item,index) {
      this.number = "";
      this.id = ''
    },
    enter1(item,index) {
      this.number = index;
      this.id = item.id
    },
    leave(item,index) {
      this.num = "";
      this.id = ''
    },
    enter(item,index) {
      this.num = index;
      this.id = item.id
    }
  },
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
@import "../../style/home/Three";
</style>