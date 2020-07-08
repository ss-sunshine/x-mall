<template>
  <div>
    <navItem></navItem>
    <router-view></router-view>
    <footItem></footItem>
  </div>
</template>

<script>
import FootItem from '../components/layout/foot/FootItem'
import NavItem from '../components/layout/nav/NavItem'
export default {
  name: "Layout",
  props: {},
  components: {
    NavItem,
    FootItem
  },
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>