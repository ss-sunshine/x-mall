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
    return {};
  },
  methods: {
    getHome(){
       this.$api.getHome().then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       })
     }
  },
  mounted() {
    this.getHome()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>