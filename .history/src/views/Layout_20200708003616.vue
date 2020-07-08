<template>
  <div>
    <navItem></navItem>
    <div class="backgroud f-j">
      <div class="box">
        <router-view></router-view>
      </div>
    </div>
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
.backgroud{
  background: rgb(237,237,237);
  padding: 20px 0 60px 0;
}
</style>