<template>
  <div class="m-t-2">
    <div class="detail_top">
      <div class="d-f">
        <div>
          <div v-for="item in detail.productImageSmall" :key="item.id">
          <div class="detail_img m-b-1">
            <img :src="item" alt="" class="detail_image">
          </div>
        </div>
        </div>
        <div class="detail_banner">
          <img :src="detail.productImageBig" alt="" class="detailBanner">
        </div>
        <div>
          <div>
            <div class="f24">{{detail.productName}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: {},
  components: {},
  data() {
    return {
      productId: "",
      detail:{}
    };
  },
  methods: {},
  mounted() {
    this.productId = this.$route.query.productId;
    // console.log(this.productId);
    // this.getDetail()
    this.$api
      .getDetail(this.productId)
      .then(res => {
        console.log(res.data.result);
        this.detail = res.data.result
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
@import "../../style/Detail"
</style>