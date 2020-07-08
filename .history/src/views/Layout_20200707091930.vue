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
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>