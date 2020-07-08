<template>
  <div>
    <navItem></navItem>
    <router-view></router-view>
  </div>
</template>

<script>
import NavItem from '../components/layout/nav/NavItem'
export default {
  name: "Layout",
  props: {},
  components: {
    NavItem
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
    this.$api
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>