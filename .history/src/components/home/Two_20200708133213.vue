<template>
  <div class="m-tb-3">
    <topTitle>
      <template v-slot:title>热门商品</template>
    </topTitle>
    <div class="box f-aj-around">
      <div v-for="(item,index) in hot" :key="index" class="f-1">
        <div
          v-if="index===0"
          class="H_item f-c-a-j"
          :class="{'H_item_left':index===0,
          'H_item_hover_left':flag===true}"
          @mouseenter="enter2"
          @mouseleave="leave2"
        >
          <img :src="item.picUrl" alt />
          <div class="f16">{{item.productName}}</div>
          <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
          <div class="f18 m-t-1" @mouseenter="enterBtn" @mouseleave="leaveBtn">
            <div v-if="btn===false" class=" f-w-7 salePrice">{{item.salePrice|fixed}}</div>
            <div class="d-f" v-if="btn===true">
              <div class="f12 btn1 f-a-j">查看详情</div>
              <div class="f12 btn f-a-j f-color-w">加入购物车</div>
            </div>
          </div>
        </div>
        <div
          v-if="index===1"
          class="H_item f-c-a-j"
          :class="{'H_item_right':index===1,
          'H_item_hover_right':enter===true}"
          @mouseenter="enter1"
          @mouseleave="leave1"
        >
          <img :src="item.picUrl" alt />
          <div class="f16">{{item.productName}}</div>
          <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
          <div class="f18 f-w-7 salePrice m-t-1">{{item.salePrice|fixed}}</div>
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
    return {
      flag: false,
      enter: false,
      btn: false
    };
  },
  methods: {
    leave2() {
      this.flag = false;
    },
    leave1() {
      this.enter = false;
    },
    enter2() {
      this.flag = true;
    },
    enter1() {
      this.enter = true;
    },
    leaveBtn() {
      this.btn = false;
      this.flag = false;
    },
    enterBtn() {
      this.btn = true;
      this.flag = true;
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
@import "../../style/home/Two";
</style>