<template>
  <div>详情</div>
</template>

<script>
export default {
  name: "DetailItem",
  props: {},
  components: {},
  data() {
    return {
      productId: ""
    };
  },
  methods: {
    getDetail(){
      this.$api.getDetail(this.productId).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.productId = this.$route.query.productId;
    console.log(this.productId);
    this.getDetail()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>