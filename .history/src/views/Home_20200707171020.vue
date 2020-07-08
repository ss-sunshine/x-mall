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
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        console.log(res);
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