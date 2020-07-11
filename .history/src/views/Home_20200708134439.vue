<template>
  <div>
    <banner :banner='banner'></banner>
    <one :activeSection='activeSection'></one>
    <two :hot='hot'></two>
    <three :featured='featured'></three>
  </div>
</template>

<script>
import Three from "../components/home/Three"
import Two from "../components/home/Two"
import One from "../components/home/One"
import Banner from "../components/home/Banner";
export default {
  name: "Home",
  props: {},
  components: {
    Banner,
    One,
    Two,
    Three
  },
  data() {
    return {
      list:[],
      banner:{},
      activeSection:[],
      hot:[],
      featured:[]
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
        this.hot = this.list[2].panelContents
        this.featured = this.list[3].panelContents
        console.log(this.featured);
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