<template>
  <div>
    <banner :banner='banner'></banner>
    <one :activeSection='activeSection'></one>
    <two :hot='hot'></two>
    <three :featured='featured'></three>
    <frou :brandOne='brandOne'></frou>
    <five :brandTwo='brandTwo'></five>
  </div>
</template>

<script>
import Five from "../components/home/Five"
import Frou from "../components/home/Frou"
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
    Three,
    Frou,
    Five
  },
  data() {
    return {
      list:[],
      banner:{},
      activeSection:[],
      hot:[],
      featured:[],
      brandOne:[],
      brandTwo:[],
      footer:[]
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
        this.brandOne = this.list[4].panelContents
        this.brandTwo = this.list[5].panelContents
        this.footer = this.list[5].panelContents
        console.log(this.brandTwo);
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