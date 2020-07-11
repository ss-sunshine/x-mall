<template>
  <div class="m-t-2">
    <div class="detail_top">
      <div>
        <div v-for="item in detail.productImageSmall"></div>
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