<template>
  <div class="m-t-2">
    <div class="detail_top m-b-2">
      <div class="d-f">
        <div>
          <div v-for="(item,index) in detail.productImageSmall" :key="index">
            <div class="detail_img m-b-1" @click="clickImg(item,index)" :class="{'detail_img_hover':sum===index}">
              <img :src="item" alt class="detail_image" />
            </div>
          </div>
        </div>
        <div v-for="(item,index) in detail.productImageSmall" :key="index">
          <div class="detail_banner" v-if="sum===index">
            <img :src="item" alt class="detailBanner" />
          </div>
        </div>
        <div>
          <div class="border_bottom_top">
            <div class="f24 f-color-b productName">{{detail.productName}}</div>
            <div class="f-aj-bw">
              <span class="subTitle f14">{{detail.subTitle}}</span>
              <span class="salePrice f24 f-w-7">{{detail.salePrice|fixed}}</span>
            </div>
          </div>
          <div class="border_bottom_bottom f-a">
            <span class="f14 p-r-2">数量</span>
            <div class="f-a">
              <div class="less f-a-j">
                <div class="line"></div>
              </div>
              <input type="number" class="ipt f-j" v-model="num">
              <!-- <div class="num f-j">{{num}}</div> -->
              <div class="plus f-a-j f-w-7" @click="clickAdd">+</div>
            </div>
          </div>
          <div class="d-f p-l-1 p-t-3">
            <div class="addShopping f-color-w f-a-j f14 m-r-1">加入购物车</div>
            <div class="now f-a-j f14">现在购买</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <topTitle>
        <template v-slot:title>产品信息</template>
      </topTitle>
      <div class="box f-j" >
        <div v-html="detail.detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "../home/TopTitle";
export default {
  name: "DetailItem",
  props: {},
  components: {
    TopTitle
  },
  data() {
    return {
      productId: "",
      detail: {},
      num: 1,
      sum:0
    };
  },
  methods: {
    clickImg(item,index){
      this.sum = index
    },
    clickAdd(){
      let i=1
      this.num = this.num+i
      console.log(this.num);
    }
  },
  mounted() {
    this.productId = this.$route.query.productId;
    // console.log(this.productId);
    // this.getDetail()
    this.$api
      .getDetail(this.productId)
      .then(res => {
        console.log(res.data.result);
        this.detail = res.data.result;
      })
      .catch(err => {
        console.log(err);
      });
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
@import "../../style/Detail";
</style>