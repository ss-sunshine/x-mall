<template>
  <div>
    <banner :banner='banner'></banner>
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
      list:[],
      banner:{},
      activeSection:{}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        console.log(res);
        this.list = res.data
        this.banner = this.list[0]
        // console.log(this.banner);
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