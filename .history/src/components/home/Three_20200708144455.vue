<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div class="box">
      <div class="d-f">
        <div v-for="(item,index) in featured.slice(0,3)" :key="index" class="f-1">
          <div v-if="index===0">
            <img :src="item.picUrl" alt class="image1" />
          </div>
          <div v-if="index!==0" class="banner1 f-1 f-c-a-j">
            <img :src="item.picUrl" alt class="image2" />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div class="f-w-7 f18 salePrice">{{item.salePrice|fixed}}</div>
              <div class="d-f">
                <div class="f12 btn1 f-a-j">查看详情</div>
                <div class="f12 btn f-a-j f-color-w">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-f">
        <div v-for="(item,index) in featured.slice(3)" :key="index" class="f-1">
          <div
            class="banner1 f-1 f-c-a-j"
            @mouseenter="enter"
            @mouseleave="leave"
            :class="{'H_item_hover':flag===true}"
          >
            <img :src="item.picUrl" alt class="image2" />
            <div class="f16">{{item.productName}}</div>
            <div class="f12 l-h-12 p-1 subTitle">{{item.subTitle}}</div>
            <div class="m-t-1 f-c-a">
              <div class="f-w-7 f18 salePrice">{{item.salePrice|fixed}}</div>
              <div class="d-f">
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
      flag: false
    };
  },
  methods: {
    leave() {
      this.flag = false;
    },
    enter() {
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
@import "../../style/home/Three";
</style>