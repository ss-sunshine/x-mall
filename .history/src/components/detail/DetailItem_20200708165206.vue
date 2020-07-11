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
  },
  mounted() {
    this.productId = this.$route.query.productId;
    console.log(this.productId);
    this.$api.getDetail().then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>