<template>
  <div>
    <banner :banner='banner'></banner>
    <one :activeSection='activeSection'></one>
    <two></two>
  </div>
</template>

<script>
import Two from "../components/home/Two"
import One from "../components/home/One"
import Banner from "../components/home/Banner";
export default {
  name: "Home",
  props: {},
  components: {
    Banner,
    One
  },
  data() {
    return {
      list:[],
      banner:{},
      activeSection:[]
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
        this.activeSection = this.list[1].panelContents
        console.log(this.activeSection);
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