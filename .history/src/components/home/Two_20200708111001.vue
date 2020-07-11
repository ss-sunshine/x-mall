<template>
  <div>
    <topTitle>
      <template v-slot:title>地址列表</template>
    </topTitle>
  </div>
</template>

<script>
import TopTitle from "./TopTitle"
export default {
  name: "Two",
  props: {
    hot: {
      type: Array
    }
  },
  components: {
    TopTitle
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>