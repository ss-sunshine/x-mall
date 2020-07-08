<template>
  <div>
    <banner></banner>
  </div>
</template>

<script>
import Banner from "../components/home/Banner";
export default {
  name: "Home",
  props: {},
  components: {
    Banner
  },
  data() {
    return {
      list:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        console.log(res);
        this.list = res.data
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
</style>