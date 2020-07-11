<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div class="box">
      <div class="d-f top">
        <div v-for="(item,index) in featured.slice(0,3)" :key="index" class="f-1">
          <div v-if="index===0">
            <img :src="item.picUrl" alt class="image1" />
          </div>
          <div v-if="index!==0" class="f-1">
            <div
              class="banner1 f-1 f-c-a-j"
              @mouseenter="enter1(index)"
              @mouseleave="leave1(index)"
              :class="{'H_item_hover':number===index}"
            >
              <img :src="item.picUrl" alt class="image2" />
              <div class="f16">{{item.productName}}</div>
              <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
              <div class="m-t-1 f-c-a">
                <div v-if="number===''" class="f-w-7 f18 salePrice">{{item.salePrice|fixed}}</div>
                <div class="d-f" v-if="number===index">
                  <div class="f12 btn1 f-a-j">查看详情</div>
                  <div class="f12 btn f-a-j f-color-w">加入购物车</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-f">
        <div v-for="(item,index) in featured.slice(3)" :key="index" class="f-1">
          <div
            class="banner1 f-1 f-c-a-j"
            @mouseenter="enter(index)"
            @mouseleave="leave(index)"
            :class="{'H_item_left':index===0,'H_item_right':index===3,'H_item_hover':num===index}"
          >
            <img :src="item.picUrl" alt class="image2" />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div v-if="num===''" class="f-w-7 f18 salePrice">{{item.salePrice|fixed}}</div>
              <div class="d-f" v-if="num===index">
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
  name: "",
  props: {
    featured: {
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
      number: ""
    };
  },
  methods: {
    leave1(index) {
      this.number = "";
    },
    enter1(index) {
      this.number = index;
    },
    leave(index) {
      this.num = "";
    },
    enter(index) {
      this.num = index;
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